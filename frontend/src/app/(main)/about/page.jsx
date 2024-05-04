"use client";
import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  AspectRatio,
  useMantineTheme,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie, IconHelp,IconBook, IconClock } from "@tabler/icons-react";
import classes from "./about.module.css";
import Banner from "./aaa/page";

const mockdata = [
  {
    title: "Interactive Learning",
    description:
      "In DOM Visualizer developer can learn how to manipulate the DOM using JavaScript, It is a great way to learn how the DOM works and how to manipulate it using JavaScript.",
    icon: IconBook,
  },
  {
    title: "Help to Developer",
    description:
    "DOM Visualizer helps to developer to understand the structure of the Web page of html node and how it changes in real-time as you interact with the page. This is a great way to learn how the DOM works and how to manipulate it using JavaScript.",
    icon: IconHelp,
  },
  {
    title: "Time Saving",
    description:
    "DOM Visualizer saves lot of time of developers and make them more productive, It is a great tool for web developers who want to quickly create a web page layout",
    icon: IconClock,
  },
  {
    title: "Frontend Developer",
    description:
    "DOM Structure help to Frontend developer to design the web page layout without having to write any code, It is a great tool for web developers who want to quickly create a web page layout",
    icon: IconUser,
  },
];

const About = () => {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dark" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container fluid size="lg" py="xl" className={classes.wrapper}>
      <Group justify="center">
        <Banner />
      </Group>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50} className={classes.feature_item}>
      
        {features}
      </SimpleGrid>
    </Container>
  );
};
export default About;
