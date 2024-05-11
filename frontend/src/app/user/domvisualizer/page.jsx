"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  Controls,
  Handle,
  MiniMap,
  Position,
  useEdgesState,
  useNodesState,
} from "reactflow";
import ReactHtmlParser from "react-html-parser";
import "reactflow/dist/style.css";
import { Tooltip } from "@mantine/core";

import HTMLEditor from "./Editor";
import useDomContext from "@/context/DomContext";
import DomClasses from "./domnode.module.css";
import classes from "./domnode.module.css";
import clsx from "clsx";
import { TextInput, Title, classNames } from "@mantine/core";
import { HoverCard, Button, Text, Group, Box, Grid } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import useDiagramContext from "@/context/DiagramContext";

const initBgColor = "#1A192B";

const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const nodeTypes = {
  DomNode: ({ data, isConnectable, id }) => {
    //console.log(data);
    return (
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <div className={clsx(DomClasses.domNode)}>
            <HoverCard.Dropdown style={{ pointerEvents: "none" }}>

              <Box className={classes.parent}>
                <h5>styles</h5>
                {Object.keys(data.styles).map((styleName) => (
                  <p>
                    {styleName} : {data.styles[styleName]}
                  </p>
                ))}
              </Box>
              <hr />
              <Box className={classes.parent}> <h5 style={{ letterSpacing: '1px' }}>Classes</h5>
                <p className={`${classes.myClass}`}>{data.classes}</p>
              </Box>


              <Box className={classes.parent}><h5 style={{ letterSpacing: '1px' }}>Ids</h5>
                <p className={`${classes.myid}`}>{data.ids}</p>
              </Box>
            </HoverCard.Dropdown>

            <p className={DomClasses.nodeTagName}>{data.label}</p>
            <Handle
              type="target"
              position={Position.Top}
              id={id + "handle1"}
              style={{ top: 0, background: "red" }} //this is provide top point on the edges
              isConnectable={isConnectable}
            />
            <Handle
              type="source"
              position={Position.Bottom} //thie is provide point on the edges
              id={id + "handle2"}
              style={{ bottom: 0, background: "yellow" }}
              isConnectable={isConnectable}
            />
          </div>
        </HoverCard.Target>
      </HoverCard>
    );
  },
};

const HtmlToReactFlow = ({ htmlMarkup, zoomedIn, setZoomedIn }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  let nodeId = 0;
  let edgeId = 0;

  const createReactFlowNodes = (node, parentPosition = { x: 0, y: 0 }) => {
    if (!node) {
      return [];
    }

    const nodes = node.children
      ? node.children.flatMap((child, index) =>
        createReactFlowNodes(child, {
          x: parentPosition.x + index * 100,
          y: parentPosition.y + 100,
        })
      )
      : [];

    nodes.push({
      id: `node-${nodeId++}`,
      type: "DomNode",
      data: {
        label: node.nodeName,
        styles: node.styles,
        classes: node.classes,
        ids: node.id,
        isConnectable: true,
        id: `node-${nodeId}`,
      },
      position: parentPosition,
    });
    console.log(nodes);

    return nodes;
  };

const createReactFlowEdges = (reactFlowNodes) => {
  let edges = [];

  const traverseNodes = (nodes) => {
    nodes.forEach((node) => {
      if (node.children) {
        node.children.forEach((child) => {
          edges.push({
            id: `edge-${node.id}-${child.id}`,
            source: `node-${node.id}`,
            target: `node-${child.id}`,
            animated: true,
            type: 'step',
          });
        });
        traverseNodes(node.children);
      }
    });
  };

  traverseNodes(reactFlowNodes);
  console.log(edges);
  return edges;
};

  const extractNodeNameAndStyles = (element) => {
    if (!React.isValidElement(element)) {
      return null;
    }

    const { type, props } = element;
    // console.log(props);
    const nodeName = typeof type === "string" ? type : type.name;
    const styles = props.style || {};
    const classes = props.className || "";
    const id = props.id || "";
    //console.log(classes);

    let children = null;
    if (props.children) {
      children = React.Children.map(props.children, extractNodeNameAndStyles);
    }

    return {
      nodeName,
      styles,
      classes,
      id,
      children,
    };
  };

  const parsedHtml = ReactHtmlParser(htmlMarkup);
  console.log(parsedHtml);
  const domTree = extractNodeNameAndStyles(parsedHtml[0]);
  const reactFlowNodes = createReactFlowNodes(domTree);
  console.log(reactFlowNodes);

  useEffect(() => {
    setNodes(reactFlowNodes);
    setEdges(createReactFlowEdges(reactFlowNodes));
    // console.log("reset");
  }, [htmlMarkup]);

  return (
    <AnimatePresence>
      <motion.div
        animate={{
          marginTop: zoomedIn ? "-40vh" : "0",
          width: zoomedIn ? "100%" : "30%",
          height: zoomedIn ? "70vh" : "20vh",
        }}
        transition={{ duration: 0.5 }}
        pt="100px"
        className={classes.parent_react_flow}
      >
        <ReactFlow
          className={classes.react_flow}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          style={{
            background: "#666",
            // transform: zoomedIn ? 'scale(1.5)' : 'scale(1)' // Add this line
          }}
          nodeTypes={nodeTypes}
          connectionLineStyle={connectionLineStyle}
          snapToGrid={true}
          snapGrid={snapGrid}
          defaultViewport={defaultViewport}
          fitView
          attributionPosition="bottom-left"
        >
          <Button
            m={10}
            className={classes.btn_zoom}
            onClick={(e) => setZoomedIn(!zoomedIn)}
          >
            {zoomedIn ? "Zoom Out" : "Zoom In"}
          </Button>
          {/* <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === "input") return "#0041d0";
            if (n.type === "selectorNode") return bgColor;
            if (n.type === "output") return "#ff0072";
          }}
          nodeColor={(n) => {
            if (n.type === "selectorNode") return bgColor;
            return "#fff";
          }}
        /> */}
          <Controls />
        </ReactFlow>
      </motion.div>
    </AnimatePresence>
  );
};

const Visualizer = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const { code, setCode, extractHTMLFromUrl } = useDomContext();
  const { selDiagram, setSelDiagram, updateDiagram } = useDiagramContext();

  const [zoomedIn, setZoomedIn] = useState(false);

  const urlRef = useRef();

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
    //console.log(node);
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
        id: "num1i-num1",
        source: "1",
        target: "2",
        sourceHandle: "num1i",
        animated: true,
        style: { stroke: "#fff" },
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

  const changeName = (e) => {
    setSelDiagram({
      ...selDiagram,
      name: e.target.value,
    });
    console.log(selDiagram);
  };

  return (
    <div>
      {selDiagram === null ? (
        <Title c="dimmed" align="center" order={1} mt={20}>
          Select or Create a New Diagram
        </Title>
      ) : (
        <>
          <Grid>
            <Grid.Col span={6}>
              <Tooltip label="Change the Directory" align="left">
                <input
                  value={selDiagram.name}
                  onChange={changeName}
                  className={classes.inputField}
                  label="Diagram Name"
                />
              </Tooltip>
              <Button onClick={updateDiagram} className={classes.btn_dom}>
                Save Change
              </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Tooltip label="Enter the Link" align="left">
                <input ref={urlRef} className={classes.inputField} />
              </Tooltip>

              <Button
                className={classes.btn_dom}
                onClick={() => extractHTMLFromUrl(urlRef.current.value)}
              >
                Extract DOM
              </Button>
            </Grid.Col>
          </Grid>

          <HTMLEditor />
          <div>
            <HtmlToReactFlow
              htmlMarkup={code}
              zoomedIn={zoomedIn}
              setZoomedIn={setZoomedIn}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Visualizer;
