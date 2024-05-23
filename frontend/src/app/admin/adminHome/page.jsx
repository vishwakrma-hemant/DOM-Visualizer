import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './home.module.css';
import Link from 'next/link';

const HeroImageBackground = () =>{
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Admin Page 
          {/* <Text component="span" inherit className={classes.highlight}>
            any stack
          </Text> */}
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
           DOM Visualizer is a tool that helps you to visualize the DOM tree of your website. It shows the structure of the HTML document in a tree format. You can see the parent-child relationship between the elements and their attributes.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg" component={Link} href='/admin/adminSign'>
            Sign in
          </Button>
          <Button className={classes.control} variant='white' size="lg" component={Link} href='/admin/adminlog'>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
export default HeroImageBackground; 