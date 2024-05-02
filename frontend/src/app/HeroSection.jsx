// import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
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
      <Title className={classes.title}>
        DOM Visualizer{' '}
        {/* <Text component="span" inherit className={classes.highlight}>
         
        </Text> */}
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
        <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
          Live demo
        </Button>
      </div>
    </div>
  </div>
);
    // <Container  size="md"> 
    //   <div className={classes.inner}>
    //     <div className={classes.content}>
    //       <Title className={classes.title}>
    //         <span className={classes.highlight}>DOM Visualizer</span>  <br /> 
    //       </Title>
    //       <Text c="dimmed" mt="md">
    //         DOM Visualizer provides a web page stucture in the form of heiararchy.
    //       </Text>

    //       <List
    //         mt={30}
    //         spacing="sm"
    //         size="sm"
    //         icon={
    //           <ThemeIcon size={20} radius="xl">
    //             <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
    //           </ThemeIcon>
    //         }
    //       >
    //         <List.Item>
    //           <b>Live DOM update</b> – It provides live dom update and user can able to see the changes on the 
    //           screen.
    //         </List.Item>
    //         <List.Item>
    //           <b>User Interactive</b> – user can easily interact with it and also perform some changes.
    //         </List.Item>
    //         <List.Item>
    //           <b>Readiblity</b> – DOM visualizer help to read and learn something.
    //         </List.Item>
    //       </List>

    //       <Group mt={30}>
    //         <Button radius="xl" size="md" className={classes.control} component={Link} href="/signup">
    //           Sign Up
    //         </Button>
    //         <Button radius="xl" size="md" className={classes.control} component={Link} href="/login">
    //           Login
    //         </Button>
    //       </Group>
    //     </div>
    //     <Image src="https://media.geeksforgeeks.org/wp-content/uploads/20210908120846/DOM.png" className={classes.image} />
    //   </div>
    // </Container>
  
}