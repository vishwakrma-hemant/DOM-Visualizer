'use client';
import { Image, Card, Text, Group, Button, rem, Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons-react';
import classes from './about.module.css';

const images = [
  "https://th.bing.com/th/id/OIP.ErAiMih0ltX9nxzgEbfN0gHaEp?rs=1&pid=ImgDetMain",
  "https://medforest.net/wp-content/uploads/2020/09/montclima1-768x512.jpg",
  "https://i.pinimg.com/736x/c4/1e/ce/c41ece3252845616bf8c5ed5a7de48bf--forest-photography-magical-forest.jpg"
];
 function CarouselCard() {
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220}  />
    </Carousel.Slide>
  ));

  return (
    <Container fluid mt={20}>
      <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg">
          Forde, Norway
        </Text>

        <Group gap={5}>
          <IconStar style={{ width: rem(16), height: rem(16) }} />
          <Text fz="xs" fw={500}>
            4.78
          </Text>
        </Group>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in
        ultimate comfort. Enjoy the view of the epic mountain range of Blegja and the Førdefjord.
      </Text>

      <Group justify="space-between" mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            397$
          </Text>
          <Text span fz="sm" c="dimmed">
            {' '}
            / night
          </Text>
        </div>

        <Button radius="md">Book now</Button>
      </Group>
    </Card>
    </Container>
  );
}
export default CarouselCard;