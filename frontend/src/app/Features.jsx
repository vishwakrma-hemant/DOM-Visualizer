'use client';
import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import classes from './features.module.css';

export const MOCKDATA = [
  {
    icon: IconUser,
    title: 'Improve developer productivity',
    description:
    'DOM visualizer improve the developer productivity by providing DOM structure of  webpage.',
  },
  {
    icon: IconGauge,
    title: 'Understanding HTML web structure',
    description:
      'DOM visualizer provides the DOM structure of HTML webpages , so developer can easily understand the entire structure of webpage.',
  },
  {
    icon: IconCookie,
    title: 'Interactive',
    description:
      'The new developer can directly perform changes on a web page by the drag and drop property of DOM visualizer.',
  },
  {
    icon: IconLock,
    title: 'Reduce Learning Curve',
    description:
      'Reduce learning curve providing the DOM structure the developer can easily save time to learn new properties.',
  },
  {
    icon: IconMessage2,
    title: 'Cross-Browser-Compatibility',
    description:
      'DOM Visualizer run every platfrom and it is easy to use.',
  },
];


function Feature({ icon: Icon, title, description }) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>DOM Visualizer are used in the different placed</Title>

      {/* <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          DOM Visualizer provides the DOM Structure of web page and it also
          provides some functionality like Drag and Drop and Live DOM Update.
        </Text>
      </Container> */}

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default FeaturesGrid;