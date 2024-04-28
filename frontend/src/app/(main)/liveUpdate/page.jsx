'use client';
import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Container, BackgroundImage } from '@mantine/core';
import classes from './live.module.css';
import Link from 'next/link';
import { Component } from 'react';

const mockdata = {
  image:
    'https://img.etimg.com/thumb/msid-84146083,width-1015,height-761,imgsize-638053,resizemode-8/prime/technology-and-startups/booting-up-developer-economy-how-tech-startups-are-helping-coders-build-and-test-software-faster.jpg',
    title: 'Live DOM Update',
  description:
    'In a DOM Visualizer, Live DOM Update provide structure of the Web page of html node and how it changes in real-time as you interact with the page. This is a great way to learn how the DOM works and how to manipulate it using JavaScript.It saves lot of time of developers and make them more productive.',
  badges: [
    { emoji: '💻', label: 'Computer' }, // Changed emoji
    { emoji: '⌨️', label: 'Keybord' }, // Changed emoji
    { emoji: '🖥️', label: 'Monitor' }, // Changed emoji
    { emoji: '🖱️', label: 'Mouse' }, // Changed emoji
    { emoji: '👨‍💻', label: 'Developer' }, // Changed emoji
  ],
};

function domUpdate() {
  const { image, title, description, country, badges } = mockdata;
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  return (
    <Container fluid>
        <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title}  className={classes.img} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {country}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }} component={Link} href='./signup'
        >
          Signup
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
    </Container>
  );
}
export default domUpdate