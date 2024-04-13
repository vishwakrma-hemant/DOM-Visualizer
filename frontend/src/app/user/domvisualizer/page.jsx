"use client";
import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Controls,
  Handle,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "reactflow";
import ReactHtmlParser from "react-html-parser";
import "reactflow/dist/style.css";
import HTMLEditor from "./Editor";
import useDomContext from "@/context/DomContext";
import DomClasses from './domnode.module.css';
import clsx from "clsx";

const initBgColor = "#1A192B";

const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const nodeTypes = {
  DomNode: ({ data, isConnectable, id }) => {
    return (
      <div className={clsx(DomClasses.domNode)}>
        <p className={DomClasses.nodeTagName}>{data.label}</p>
        {/* <Handle
                    type="source"
                    position={Position.Right}
                    id={id}
                    style={{ top: 10, background: '#555' }}
                    isConnectable={isConnectable}
                /> */}
      </div>
    );
  },
};

const HtmlToReactFlow = ({ htmlMarkup }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  let nodeId = 0;

  const createReactFlowNodes = (node, parentPosition = { x: 0, y: 0 }) => {
    if (!node) {
      return [];
    }

    const nodes = node.children
      ? node.children.flatMap((child, index) =>
          createReactFlowNodes(child, {
            x: parentPosition.x + 100,
            y: parentPosition.y + index * 100,
          })
        )
      : [];

    nodes.push({
      id: `node-${nodeId++}`,
      type: "DomNode",
      data: { label: node.nodeName, styles: node.styles },
      position: parentPosition,
    });

    return nodes;
  };

  const createReactFlowEdges = (node) => {
    if (!node || !node.children) {
      return [];
    }

    const edges = node.children.flatMap((child) => {
      return {
        id: `edge-${nodeId++}`,
        source: `node-${nodeId - 1}`,
        target: `node-${nodeId}`,
      };
    });

    return edges;
  };

  const extractNodeNameAndStyles = (element) => {
    if (!React.isValidElement(element)) {
      return null;
    }

    const { type, props } = element;
    const nodeName = typeof type === "string" ? type : type.name;
    const styles = props.style || {};

    let children = null;
    if (props.children) {
      children = React.Children.map(props.children, extractNodeNameAndStyles);
    }

    return {
      nodeName,
      styles,
      children,
    };
  };

  const parsedHtml = ReactHtmlParser(htmlMarkup);
  const domTree = extractNodeNameAndStyles(parsedHtml[0]);
  const reactFlowNodes = createReactFlowNodes(domTree);
  console.log(reactFlowNodes);

  useEffect(() => {
    setNodes(reactFlowNodes);
    setEdges(createReactFlowEdges(domTree));
    console.log("reset");
  }, []);

  return (
    <div style={{ width: "1000px", height: "1000px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        style={{ background: "#666" }}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultViewport={defaultViewport}
        fitView
        attributionPosition="bottom-left"
      >
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === "input") return "#0041d0";
            if (n.type === "selectorNode") return bgColor;
            if (n.type === "output") return "#ff0072";
          }}
          nodeColor={(n) => {
            if (n.type === "selectorNode") return bgColor;
            return "#fff";
          }}
        />
        <Controls />
      </ReactFlow>
    </div>
  );
};

const Visualizer = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const {code, setCode} = useDomContext();

  const extractNodeNameAndStyles = (element) => {
    if (!React.isValidElement(element)) {
      return null;
    }

    const { type, props } = element;
    const nodeName = typeof type === "string" ? type : type.name;
    const styles = props.style || {};

    let children = null;
    if (props.children) {
      children = React.Children.map(props.children, extractNodeNameAndStyles);
    }

    return {
      nodeName,
      styles,
      children,
    };
  };

  useEffect(() => {
    const ele = ReactHtmlParser(code);

    const node = extractNodeNameAndStyles(ele[0]);
    console.log(node);
  }, []);

  useEffect(() => {
    setNodes([
      {
        id: "6",
        type: "DomNode",
        data: { nodeName: "document", id: "x1" },
        position: { x: -200, y: 400 },
        sourcePosition: "right",
      },
    ]);

    setEdges([
        {
            id: 'num1i-num1',
            source: '1',
            target: '2',
            sourceHandle: 'num1i',
            animated: true,
            style: { stroke: '#fff' },
        },
    ]);
  }, []);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );

  return (
    <div>
      <HTMLEditor />
      <div >
        <HtmlToReactFlow htmlMarkup={code} />
        {/* <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                style={{ background: '#666' }}
                nodeTypes={nodeTypes}
                connectionLineStyle={connectionLineStyle}
                snapToGrid={true}
                snapGrid={snapGrid}
                defaultViewport={defaultViewport}
                fitView
                attributionPosition="bottom-left"
            >
                <MiniMap
                    nodeStrokeColor={(n) => {
                        if (n.type === 'input') return '#0041d0';
                        if (n.type === 'selectorNode') return bgColor;
                        if (n.type === 'output') return '#ff0072';
                    }}
                    nodeColor={(n) => {
                        if (n.type === 'selectorNode') return bgColor;
                        return '#fff';
                    }}
                />
                <Controls />
            </ReactFlow> */}
      </div>
    </div>
  );
};

export default Visualizer;
