'use client';
import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import classes from './submitContact.module.css';

const ThankYou = () => {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Thank You!</Title>
        <Text className={classes.description} size="xl" mt="sm">
           Thank you for contacting us. We will get back to you soon.
        </Text>
      </Container>
    </div>
  );
}
export default ThankYou;