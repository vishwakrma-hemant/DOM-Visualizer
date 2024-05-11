"use client";
import { Image, Accordion, Grid, Container, Title, Text } from "@mantine/core";
import classes from "./faq.module.css";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

function Faq() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src={
                "https://static.vecteezy.com/system/resources/previews/006/584/578/non_2x/illustration-graphic-cartoon-character-of-questions-and-answers-business-free-vector.jpg"
              }
              alt="Frequently Asked Questions"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              variant="separated"
            >
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>What is a DOM Visualizer?</Accordion.Control>
                <Accordion.Panel>
                  <Text>
                    A tool used to visualize the Document Object Model (DOM)
                    structure of a web page in a graphical interface
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>
                  How does a DOM Visualizer help developers?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text>
                  It helps developers understand the hierarchical structure of
                  HTML elements in a web page, aiding in debugging and
                  development.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>
                  Can a DOM Visualizer display dynamic changes in real-time?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text>
                  Yes, some DOM Visualizers offer real-time updates, allowing
                  developers to see changes made to the DOM as they occur.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  How can a DOM Visualizer be useful in responsive web design?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text>
                  It helps developers visualize how the DOM hierarchy changes
                  across different screen sizes, aiding in creating responsive
                  layouts.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
export default Faq;
