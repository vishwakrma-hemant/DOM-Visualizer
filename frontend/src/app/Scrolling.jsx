import React from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import classes from './scrolling.module.css';
import '@mantine/carousel/styles.css';


function Card({ image, title, category }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

const data = [
   {
    image:
      'https://collegekampus.com/wp-content/uploads/2020/07/fullstack_php_js.jpg',
    title: 'Web Page Markup Extractor',
    category: 'DOM Visualizer',
  },
  {
    image:
      'https://bootflow.academy/wp-content/uploads/2022/07/UI-UX-Design.jpeg',
    title: 'Code Manager',
    category: 'DOM Visualizer',
  },
  {
    image:
      'https://fastspring.com/wp-content/uploads/2017/08/adobestock_189458508-1024x551.png',
    title: 'Node Generator',
    category: 'DOM Visualizer',
  },
  {
    image:
      'https://th.bing.com/th/id/OIP.2rg0cs3eiA3y9SlNf1woFAHaEX?w=1846&h=1089&rs=1&pid=ImgDetMain',
    title: 'HTML Parser',
    category: 'DOM Visualizer',
  },
]

function Scroll() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      style={{ overflowX: 'auto' }} // Ensure overflow is set to auto or scroll
    >
      {slides}
    </Carousel>
  );
}
export default Scroll;
