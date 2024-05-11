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
import classes from "./log.module.css";
import {useForm} from '@mantine/form'
import Link from "next/link";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const loginForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const loginSubmit = (values) => {
    console.log(values);
    fetch("http://localhost:5000/admin/authenticate", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          enqueueSnackbar("User Login successfully", {
            variant: "success",
          });
          response.json().then((data) => {
            console.log(data);
            sessionStorage.setItem("admin", JSON.stringify(data));
            router.push("/admin/ControlPanel/userControl");
          });

        } else if(response.status === 401) {
          enqueueSnackbar("invalide credentials", { variant: "error" });
        }else{
          enqueueSnackbar("somthing went worng ", {variant:"warning"})
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Server side error", { variant: "error" });
      });
  };

  return (
    <BackgroundImage
      h={"100vh"}
      className={classes.background}
      src="https://intersog.co.il/handling/assets/uploads/2021/04/shutterstock_1552462901.jpg"
    >
      <Container size={420} py={40}>
        <form onSubmit={loginForm.onSubmit(loginSubmit)}>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="Enter your email"
            {...loginForm.getInputProps('email')}
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            {...loginForm.getInputProps('password')}
            mt="md"
          />
          <Group justify="space-between" mt="lg">

            {/* <Checkbox label="Remember me" /> */}

            <Link href={"/forgetpassword"} component="button" size="sm">
              Forgot Password?
            </Link>
          </Group>
          <Button
          type="submit"
            fullWidth
            mt="xl"
          >
            Log in
          </Button>

          <Divider my="xs" label="OR" labelPosition="center" />

          <Button
            mx={"auto"}
            display={"block"}
            component={Link}
            href="/admin/adminSign"
            variant="outline"
          >
            Sign up
          </Button>
        </Paper>
        </form>
      </Container>
    </BackgroundImage>
  );
};

export default Login;
