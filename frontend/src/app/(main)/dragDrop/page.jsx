'use client';
import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './drop.module.css';

const mockdata = {
  image:
    'https://cdn.dribbble.com/users/1235346/screenshots/3335622/dribbble.gif',
  title: 'Drag & Drop',
  country: 'DOM Visualizer',
  description:
    'In DOM Visulaizer, you can drag and drop elements to create a web page layout without having to write any code. It is a great tool for web developers who want to quickly create a web page layout.',
  badges: [
    { emoji: '🔀', label: 'Drag & Drop' },
    { emoji: '💻', label: 'Code' },
    { emoji: '👨‍💻', label: 'Developer' },
    { emoji: '🌐', label: 'DOM Visualizer' },
    { emoji: '⌨️', label: 'Keyboard' },
  ],
};

function BadgeCard() {
  const { image, title, description, country, badges } = mockdata;
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={'DOM Viusalizer'} className={classes.img} />
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
      <Button radius="md" style={{ flex: 1 }} component={Link} href='./signup'>
          Signup
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
export default BadgeCard;