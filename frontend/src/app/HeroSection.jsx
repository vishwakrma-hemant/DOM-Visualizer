import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import Link from "next/link";
import classes from './hero.module.css';

export function HeroSection() {
  return (
    <div className={classes.wrapper}>
    <Overlay color="#000" opacity={0.65} zIndex={1} />

    <div className={classes.inner}>
      <Title className={classes.title} style={{letterSpacing:'.7px'}}>
        DOM Visualizer   
      </Title>

      <Container size={640}>
        <Text size="lg" className={classes.description}>
        DOM is a programming interface for web documents. It represents the structure of HTML documents as a tree-like structure, where each node represents a part of the document, like elements, attributes, and text. 
        </Text>
      </Container>

      <div className={classes.controls}>
        <Button className={classes.control} variant="white" size="lg" component={Link} href='/signup'>
          Get started
        </Button>
        {/* <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
          Live demo
        </Button> */}
      </div>
    </div>
  </div>
);
  
}