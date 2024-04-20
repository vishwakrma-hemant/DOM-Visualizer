"use client";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  Container,
  Title,
  BackgroundImage,
} from "@mantine/core";
import ContactIconsList from "./contactIcon";
import bg from "./bg.svg";
import classes from "./contact.module.css";
import { useForm } from "@mantine/form";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import {Link} from 'next/link';
import CountryFlag from "react-country-flag";
import CountryFlagComponent from "react-country-flag";

const contact = () => {

  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      number: "",
      message:"",
    },
   
  });
  

  const contactSubmit = (values) => {
    console.log(values);
    fetch("http://localhost:5000/contact/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          router.push("/thankYou");
          enqueueSnackbar("contact added Successfully", {
            variant: "success",
          });
        } else {
          enqueueSnackbar("Something went wrong", { variant: "error" });
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Something went wrong", { variant: "error" });
      });
    
  };
  return (
    <BackgroundImage pt={'10vh'} h={'100vh'} src="https://th.bing.com/th/id/OIP.-WwCRYCLkhIrvAeeuguIJgHaEK?w=1200&h=675&rs=1&pid=ImgDetMain">
      <Container>
        <Paper shadow="md" radius="lg">
          <div className={classes.wrapper}>
            <div
              className={classes.contacts}
              style={{ backgroundImage: `url(${bg.src})` }}
            >
              <Text fz="lg" fw={700} className={classes.title} c="#fff">
                Contact information
              </Text>

              <ContactIconsList />
            </div>

            <form
              className={classes.form}
              onSubmit={form.onSubmit(contactSubmit)}
            >
              <Text fz="lg" fw={700} className={classes.title}>
                   <Title>Contact with Us</Title>
              </Text>

              <div className={classes.fields}>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                  <TextInput label="Your name" placeholder="Your name" {...form.getInputProps('name')} />
                  <TextInput
                    label="Your email"
                    placeholder="hello@mantine.dev"
                    {...form.getInputProps('email')}
                    required
                  />
                </SimpleGrid>
            <Container>
                <CountryFlagComponent countryCode={91} />
                <TextInput
                  mt="md"
                  label="Number"
                  placeholder="Enter your number"
                  {...form.getInputProps('number')}
                  required
                />
          </Container>
                <Textarea
                  mt="md"
                  label="Your message"
                  placeholder="Please include all relevant information"
                  {...form.getInputProps('message')}
                  minRows={3}
                />

                <Group justify="flex-end" mt="md">
                  <Button type="submit" className={classes.control} component={Link} href='/thankYou'>
                    Send message
                  </Button>
                </Group>
              </div>
            </form>
          </div>
        </Paper>
      </Container>
    </BackgroundImage>
  );
};
export default contact;
