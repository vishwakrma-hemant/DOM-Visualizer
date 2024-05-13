"use client";
import {
  Card,
  Overlay,
  Button,
  a,
  Text,
  Container,
  Box,
  ActionIcon,
  BackgroundImage,
} from "@mantine/core";
import classes from "./edit.module.css";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconImageInPicture,
} from "@tabler/icons-react";
import { useState,useEffect } from "react";
import Link from "next/link";

const UserPro = () => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const fetchUserData  = () => {
    fetch(`http://localhost:5000/user/getUser`,)
  .then(res => {
    console.log(res.status);
    return res.json();
  })
  .then(data => {
    console.log(data);
    router.push('/user/profile/editProfile')
    setCurrentUser(data)
  })
  .catch(err => {
    console.log(err);
  });
  }
  
  useEffect(() => {
    fetchUserData();
  },[])
  

  // const uploadImage = async(e) => {
  //   const file = e.target.files[0];
  //   setselImage(file);
  //   const fd = new FormData();
  //   fd.append('image',file);
  //   fetch('http:://localhost:5000/util/uploadfile', {
  //     method: 'POST',
  //     body: fd
  //   }).then((re)=>{
  //     if(res.status === 200){
  //       console.log('file uploaded');
  //       toast.succes('File Uploaded')
  //       return res.json();
  //     }
  //   })
  // }
  return (
    <Container fluid className={classes.wrapper}>
        <Card className={classes.card}>
          <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

          <div className={classes.content}>
            <Text size="lg" className={classes.title} mt={"xl"}>
              Hemant Kumar
            </Text>

            <Text size="xs" className={classes.description}>
              Web Developer
            </Text>
            <Box className={classes.btn} mt={"xl"}>
              <ActionIcon 
                className={classes.pip}
                component={Link}
                href="https://github.com/vishwakrma-hemant?tab=repositories"
              >
                <IconImageInPicture className={classes.place} />
              </ActionIcon>
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
                <IconBrandInstagram size={33} className={classes.btn_icon} />
              </ActionIcon>
            </Box>
          </div>
        </Card>

    </Container>
  );
};
export default UserPro;
