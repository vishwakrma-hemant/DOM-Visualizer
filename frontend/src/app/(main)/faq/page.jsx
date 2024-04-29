"use client";
import { Container, Title, Accordion, BackgroundImage} from "@mantine/core";
import classes from "./faq.module.css";
import { Grid } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

function FAQ() {
  return (
    <>
      <BackgroundImage
        className={classes.img}
        src="https://img.freepik.com/premium-photo/q-discussion-faq-support-question-answer-help-service-business-concept_505353-278.jpg?w=826"
      >
        <Grid>
          <Container size="lg" className={classes.wrapper}>
            <Grid.Col span={12}>
              <Title ta="center" className={classes.title}>
                Frequently Asked Questions
              </Title>

              <Accordion>
                <Accordion.Item className={classes.item} value="reset-password">
                  <Container className={classes.faq} py={'xs'} >
                    How can I reset my password?
                    <IconSearch />
                  </Container>
                </Accordion.Item>

                <Accordion.Item
                  className={classes.item}
                  value="another-account"
                >
                  <Container className={classes.faq} py={'xs'}>
                    Can I create more that one account?
                    <IconSearch />
                  </Container>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="newsletter">
                  <Container className={classes.faq} py={'xs'}>
                    How can I subscribe to monthly newsletter?
                    <IconSearch />
                  </Container>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="credit-card">
                  <Container className={classes.faq} py={'xs'}>
                    Do you store credit card information securely?
                    <IconSearch />
                  </Container>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="payment">
                  <Container className={classes.faq} py={'xs'}> 
                    What payment systems to you work with?
                    <IconSearch />
                  </Container>
                </Accordion.Item>
              </Accordion>
            </Grid.Col>
          </Container>
          <Grid.Col span={5}>2</Grid.Col>
        </Grid>
      </BackgroundImage>
    </>
  );
}

export default FAQ;
