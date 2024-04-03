"use client";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
  BackgroundImage,
} from "@mantine/core";
import classes from "./login.module.css";
import { GoogleButton } from "./GoogleButton";
import Link from "next/link";

function Login() {
  return (
    // <BackgroundImage h={'100vh'} src="https://images.unsplash.com/photo-1711284882601-57bf062fef7f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <Container size={420} py={40}>
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
        {/* <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text> */}

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="Enter your email" required />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            required
            mt="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Link href={"/forgetpassword"} component="button" size="sm">
              Forgot Password?
            </Link>
          </Group>
          <Button fullWidth mt="xl">
            Log in
          </Button>

          <Divider my="xs" label="OR" labelPosition="center" />

          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Sigin using Google</GoogleButton>
          </Group>
        </Paper>
      </Container>
    // </BackgroundImage>
  );
}

export default Login;
