"use client";
import {
  Text,
  Title,
  TextInput,
  Button,
  Image,
  Container,
  BackgroundImage,
} from "@mantine/core";
import classes from "./aaa.module.css";

const Banner = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <h1 className={classes.title}>DOM Visualizer</h1>
        <Text fz="md" className={classes.text_d}>
          DOM Visualizer is a tool that allows you to generate a web page
          structure using a simple drag and drop interface. 
          It is a great tool
          for web developers who want to quickly create a web page layout
          without having to write any code, And also it is a great way to learn
          how the DOM works and how to manipulate it using JavaScript. It saves
          lot of time of developers and make them more productive.
          <br />
          DOM visualizer provide DOM of a webpage directly by passing a
          link rather than copying source code.
        </Text>
      </div>
      <Image
        src={
          "https://www.pierre-giraud.com/wp-content/uploads/2019/11/javascript-representation-dom.jpg"
        }
        className={classes.image}
      />
    </div>
  );
};
export default Banner;
