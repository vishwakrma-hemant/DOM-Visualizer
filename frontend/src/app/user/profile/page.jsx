"use client";
import {
  Card,
  Avatar,
  Text,
  Container,
  Button,
  TextInput,
  Box,
  ActionIcon,
  Dialog,
} from "@mantine/core";
import classes from "./userProfile.module.css";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const Profile = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [imagecrop, setImagecrop] = useState("");

  const handleImageClick = () => {
    console.log("image clicked");
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          updateUser({ avatar: file.name });
        }
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const fetchUserData = () => {
    fetch(`http://localhost:5000/user/getUser`)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        router.push("/user/profile/editProfile");
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUser = (data) => {
    fetch(`http://localhost:5000/user/update/`+currentUser._id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
        sessionStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section
        h={140}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)",
        }}
      />
      <Container fluid className={classes.box_btn}>
        <Box onClick={handleImageClick}>
          
            <Avatar
              src={'http://localhost:5000/'+currentUser.avatar}
              size={80}
              radius={80}
              mx="auto"
              mt={-30}
              className={classes.avatar}
            />
          <Dialog
            visibleFrom={imagecrop}
            header={() => (
              <Text htmlfor="" className="text-2xl font-semibold textColor">
                updateprofile
              </Text>
            )}
            onHide={() => setImagecrop(false)}
          >
            <Text>hi</Text>
          </Dialog>

          <TextInput
            type="file"
            ref={inputRef}
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </Box>
        <Text ta="center" fz="lg" fw={500} mt="sm">
          {currentUser.name}
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          Developer
        </Text>
        <Box className={classes.btn} mt={"xl"}>
          <ActionIcon
            // color="blue"
            radius="xl"
            size="xl"
            variant="outline"
            className={classes.btn_style}
            withBorder
            component={Link}
            href="https://github.com/vishwakrma-hemant?tab=repositories"
          >
            <IconBrandGithub size={33} className={classes.btn_icon} />
          </ActionIcon>

          <ActionIcon
            // color="blue"
            radius="xl"
            size="xl"
            variant="outline"
            withBorder
            className={classes.btn_style}
            component={Link}
            href="https://www.linkedin.com/in/hemant-kumar-7054b4267/"
          >
            <IconBrandLinkedin size={33} className={classes.btn_icon} />
          </ActionIcon>

          <ActionIcon
            // color="blue"
            radius="xl"
            size="xl"
            variant="outline"
            withBorder
            className={classes.btn_style}
            component={Link}
            href="https://hemantk3335@gmail.com"
          >
            <IconBrandGmail size={33} className={classes.btn_icon} />
          </ActionIcon>
        </Box>
      </Container>
    </Card>
  );
};
export default Profile;
