'use client';
import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronDown} from '@tabler/icons-react';
import classes from './adminPro.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const AdminProfile = () =>{
  // const [ currentUser,setCurrentUser] = useState(
  //   JSON.parse(sessionStorage.getItem('admin'))
  // ) 
  // const fetchUserData  = () => {
  //   fetch(`http://localhost:5000/admin/getAdmin`,)
  // .then(res => {
  //   console.log(res.status);
  //   return res.json();
  // })
  // .then(data => {
  //   console.log(data);
  //   setCurrentUser(data)
  // })
  // .catch(err => {
  //   console.log(err);
  // });
  // }
  
  // useEffect(() => {
  //   fetchUserData();
  // },[])

  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src="https://img.freepik.com/premium-vector/businessman-character-avatar-isolated_24877-5037.jpg?w=740"
          radius="xl"
        />

       
        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
           Hemant Kumar
          </Text>

          {/* <Text c="dimmed" size="xs">
            {currentUser.email}
          </Text> */}
        </div>
       
         
          <Link href='#'>
          <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
          </Link>
      </Group>
    </UnstyledButton>
  );
}
export default AdminProfile;