"use client";
import React from "react";
import { Title, Text, Button, Container } from "@mantine/core";
import { Dots } from "./Dots";
import classes from "./page.module.css";
import Features, { Feature } from "./Features";
import FeaturesGrid from "./Features";
import Link from "next/link";
import Navbar from "./(main)/navbar";
import footer from "./(main)/footer";
import Footer from "./(main)/footer";

const Home = () => {
  return (
    <div className={classes.backImage}>
      <Navbar />
      <Container className={classes.wrapper} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            DOM Visualizer provide{" "}
            <Text component="span" className={classes.highlight} inherit>
              Hierarchy 
            </Text>{" "}
            of Web Page
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" c="dimmed" className={classes.description}>
            DOM stands for document object model of an HTML document.   
            DOM represent the structure of an HTML document as  a tree like structure.

            </Text>
          </Container>

          <div className={classes.controls}>
            <Button
              className={classes.control}
              size="lg"
              variant="default"
              color="blue"
            >
              <Link href={'./signup'} className={classes.signup}>Sign up</Link>
            </Button>
            <Button className={classes.control} size="lg">
               <Link href={'./login'} className={classes.login}>Log in</Link>
            </Button>
          </div>
        </div>
      </Container>

      <FeaturesGrid />

      <Footer/>
    </div>
  );
};

export default Home;
