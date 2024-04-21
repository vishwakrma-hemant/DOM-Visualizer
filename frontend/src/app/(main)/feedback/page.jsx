"use client";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import StarRatings from "react-star-ratings";

function Feedback() {
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
    <Box maw={340} mx="auto" mt={50}>
      <form onSubmit={form.onSubmit(FeedbackSubmit)}>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Enter your name"
          {...form.getInputProps("name")}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <Textarea
          mt="md"
          label="Review"
          placeholder=""
          {...form.getInputProps("review")}
          minRows={3}
        />

        <StarRatings
          rating={rating}
          starRatedColor="#dfab00"
          changeRating={setRating}
          numberOfStars={5}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
export default Feedback;
