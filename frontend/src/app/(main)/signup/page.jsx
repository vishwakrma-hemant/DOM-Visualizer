"use client";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Grid } from "@mantine/core";
import { Image } from "@mantine/core";
import { yupResolver } from "mantine-form-yup-resolver";
import * as yup from "yup";
// import{IconUser} from '@tabler/icons-react';

import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  Button,
  Anchor,
  Divider,
  Checkbox,
  Title,
  Stack,
  Box,
  Container,
  BackgroundImage,
} from "@mantine/core";
import Link from "next/link";
import classes from "./signup.module.css";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  name: yup.string().min(4, "Name should have at least 2 letters"),
  email: yup.string().required("Invalid email").email("Invalid email"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  term: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});

const Signup = () => {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      term: false,
    },
    validate: yupResolver(schema),
  });

  const signupSubmit = (values) => {
    console.log(values);
    fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          router.push("/login");
          enqueueSnackbar("User Registered Successfully", {
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
    form.validate();
    form.errors;
  };

  return (
    <Container fluid mt={'md'}>
      <Grid>
        <Grid.Col span={5} mt={'md'}>
          <Paper withBorder shadow="md" p={30} mt={30} className={classes.bor}>
            <form onSubmit={form.onSubmit(signupSubmit)}>
              <Stack>
                <TextInput
                  required
                  label="Name"
                  placeholder="hemant Kumar"
                  {...form.getInputProps("name")}
                  error={form.errors.name}
                  radius="md"
                />

                <TextInput
                  required
                  label="Email"
                  placeholder="Hemant123@gmail.com"
                  {...form.getInputProps("email")}
                  error={form.errors.email}
                  radius="md"
                />

                <PasswordInput
                  required
                  label="Password"
                  placeholder="Enter your password"
                  {...form.getInputProps("password")}
                  error={form.errors.password}
                  radius="md"
                />
                <PasswordInput
                  required
                  label="Confirm Password"
                  placeholder="Re-enter password"
                  {...form.getInputProps("confirmPassword")}
                  error={form.errors.confirmPassword}
                  radius="md"
                />

                <Checkbox
                  label="I accept terms and conditions"
                  {...form.getInputProps("term")}
                />
              </Stack>

              <Group justify="space-between" mt="xl">
                <Anchor
                  component={Link}
                  type="button"
                  c="dimmed"
                  size="xs"
                  href={"/login"}
                >
                  Already have an account? Login
                </Anchor>

                <Button type="submit" radius="xl">
                  Signup
                </Button>
              </Group>
            </form>
          </Paper>
        </Grid.Col>

        <Grid.Col span={7}>
          <Image
            src="https://img.freepik.com/premium-photo/people-are-using-digital-tablets-log-applications-websites_51530-3693.jpg?w=826"
            className={classes.img}
            mt="xl"
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};
export default Signup;