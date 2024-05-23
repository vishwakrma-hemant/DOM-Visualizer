"use client";
import { Card, Image, Text, Group, Badge, Button, Container} from "@mantine/core";
import classes from "./dev.module.css";
import Link from "next/link";

const mockdata = {
  image:
    "https://images.squarespace-cdn.com/content/v1/5efb7a015dc2ac0077a81ea5/1f60b0ae-8b2a-4ee6-9f74-4140b4630e36/18a4949fc9c8067172d3b96e302e7097.gif",
  title: "Improve Devloper Productivity",
  country: "DOM Visualizer",
  description:
    "Through the DOM Visualizer, you can improve your productivity as a developer by quickly creating web page layouts without having to write any code. This is a great tool for web developers who want to quickly create web page layouts.",
  badges: [
    { emoji: "👨‍💻", label: "Developer" }, 
    { emoji: "📜", label: "Web Page" }, 
    { emoji: "⌨️", label: "Keybord" }, 
    { emoji: "💻", label: "Computer" }, 
    { emoji: "🖱️", label: "Mouse" }, 
  ],
};
function domUpdate() {
  const { image, title, description, country, badges } = mockdata;
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {" "}
      {badge.label}
    </Badge>
  ));
  
  return (

    <Container fluid>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} className={classes.img} />
        </Card.Section>


        <Card.Section className={classes.section} mt="md">
          <Group justify="apart">
            <Text fz="lg" fw={500}>
              {" "}
              {title}{" "}
            </Text>
            <Badge size="sm" variant="light">
              {country}{" "}
            </Badge>
          </Group>
          <Text fz="sm" mt="xs">
            {" "}
            {description}{" "}
          </Text>
        </Card.Section>
        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} c="dimmed">
            Perfect for you, if you enjoy{" "}
          </Text>
          <Group gap={7} mt={5}>
            {features}
          </Group>
        </Card.Section>
        <Group mt="xs">
          <Button
            radius="md"
            style={{ flex: 1 }}
            component={Link}
            href="./signup"
          >
            {" "}
            Signup
          </Button>
        </Group>
      </Card>
    </Container>
  );
}
export default domUpdate;
