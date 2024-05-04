'use client';
import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import classes from './userProfile.module.css';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

const stats = [
  { value: '34K', label: 'Followers' },
  { value: '187', label: 'Follows' },
  { value: '1.6K', label: 'Posts' },
];

const UserProfile =()=> {

const [ currentUser,setCurrentUser] = useState(
  JSON.parse(sessionStorage.getItem('user'))
) 

const fetchUserData  = () => {
  fetch(`http://localhost:5000/user/getUser`,)
.then(res => {
  console.log(res.status);
  return res.json();
})
.then(data => {
  console.log(data);
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
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section
        h={140}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
        }}
      />
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {currentUser.name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
       {currentUser.email}
      </Text>
      <Group mt="md" justify="center" gap={30}>
        {items}
      </Group>
      <Button fullWidth radius="md" mt="xl" size="md" variant="default">
        Follow
      </Button>
    </Card>
  );
}
export default UserProfile;