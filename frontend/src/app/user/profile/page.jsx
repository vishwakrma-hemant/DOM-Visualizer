'use client';
import { Card, Avatar,ActionIcon,Box, Text, Group, Button,Container,Overlay } from '@mantine/core';
import classes from './userProfile.module.css';
import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconImageInPicture,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

const stats = [
  { value: '34K', label: 'Followers' },
  { value: '187', label: 'Follows' },
  { value: '1.6K', label: 'Posts' },
];

const UserProfile =()=> {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

const [ currentUser,setCurrentUser] = useState(
  JSON.parse(sessionStorage.getItem('user'))
) 
const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};

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

  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
  <Box className={classes.boxes}>
    <Container fluid className={classes.wrapper}>
    <Card className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <Text size="lg" className={classes.title} mt={"xl"}>
          
          {currentUser.name}
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
</Box>
  );
}
export default UserProfile;