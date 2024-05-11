"use client";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Container,
  Textarea,
  BackgroundImage,
  Grid,
  Image,
  Paper,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import classes from "./rat.module.css";
import { useRouter } from "next/navigation";

function Feedback() {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      review: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const FeedbackSubmit = (values) => {
    values.rating = rating;
    console.log(values);
    fetch("http://localhost:5000/feedback/add", {
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
          enqueueSnackbar("Feedback added Successfully", {
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
    <BackgroundImage
      src="https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?t=st=1715458788~exp=1715462388~hmac=045547ea9ba3edda43773b3298d6c6182fc9bfc33821b39a7c190919b0a364af&w=740"
      className={classes.back_img}
    >
      <Container fluid mt={'sm'} pt={'xl'}>
        <Grid>
          <Grid.Col span={6} mt={'xs'}>
            <Paper
              withBorder
              shadow="md"
              p={30}
              mt={30}
              className={classes.bor}
            >
              <form onSubmit={form.onSubmit(FeedbackSubmit)}>
                <Stack>
                  <TextInput
                    withAsterisk
                    label="Name"
                    placeholder="hemant Kumar"
                    {...form.getInputProps("name")}
                    error={form.errors.name}
                    radius="md"
                  />

                  <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="Hemant123@gmail.com"
                    {...form.getInputProps("email")}
                    error={form.errors.email}
                    radius="md"
                  />
                  <Textarea
                    withAsterisk
                    label="Review"
                    placeholder="Write your review here"
                    {...form.getInputProps("review")}
                    error={form.errors.review}
                    radius="md"
                  ></Textarea>

                  <StarRatings
                    rating={rating}
                    starRatedColor="#dfab00"
                    changeRating={setRating}
                    numberOfStars={5}
                    className={classes.star}
                  />
                </Stack>
                <Group justify="space-end" mt="md">
                  <Button type="submit" radius="xl">
                    Submit
                  </Button>
                </Group>
              </form>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box className={classes.size}>
              <Image
                src="https://img.freepik.com/free-vector/emotional-feedback-concept-illustration_114360-21832.jpg?w=740&t=st=1715458096~exp=1715458696~hmac=948d11ddadb8555438daf9aa85933b7065ced5b34c98f037b23a00bf9c96a109"
                className={classes.fee_img}
              />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </BackgroundImage>
  );
}
export default Feedback;
