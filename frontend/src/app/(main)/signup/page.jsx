"use client";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
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
  Container,
} from "@mantine/core";
import Link from "next/link";
import classes from "./signup.module.css";
import { enqueueSnackbar } from "notistack";

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length < 6 ? "Password should include at least 6 characters" : null,
    },
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
  };

  return (
    <Container size={420} py={40}>
      {/* <Title ta="center" className={classes.title}>
        Welcome back!
      </Title> */}
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(signupSubmit)}>
          <Stack>
            <TextInput
              required
              label="Name"
              placeholder="hemant Kumar"
              id="name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              error={form.errors.name && "Invalid name"}
              radius="md"
            />

            <TextInput
              required
              label="Email"
              placeholder="Hemant123@gmail.com"
              id="email"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              id="password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
            />
            <PasswordInput
              required
              label="Confirm Password"
              placeholder="Confirm password"
              id="confirmPassword"
              value={form.values.confirmPassword}
              onChange={(event) =>
                form.setFieldValue("confirmPassword", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
            />

            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component={Link}
              type="button"
              c="dimmed"
              size="xs"
              href={'/login'}
            >
              Already have an account? Login
            </Anchor>
            {/* <Link href={"/login"} component="button" size="sm">
              Log in?
            </Link> */}
            <Button type="submit" radius="xl">
              Signup
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};
export default Login;
