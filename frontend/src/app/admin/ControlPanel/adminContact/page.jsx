'use client'
import React, { useEffect, useState } from 'react';
import { Avatar, Badge, Table, Group, Text, ActionIcon, Anchor, rem, Button, Container } from '@mantine/core';
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
  

const UserFeedback = () => {

  const [userList, setUserList] = useState([])

  const fetchUserData = () => {
    fetch('http://localhost:5000/contact/getall')
      .then((response) => {
        if (response.status === 200) {
          response.json()
            .then((result) => {
              console.log(result);
              setUserList(result);
            })
        }
      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  const deleteUser = (id) => {
    fetch('http://localhost:5000/contact/delete/' + id, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.status === 200) {
          fetchUserData();
        }
      }).catch((err) => {
        console.log(err);
      });
  }

  const displayUser = () => {
    return (
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>User Name</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Phone</Table.Th>
              <Table.Th>Message</Table.Th>
              <Table.Th>Action</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
          {
            userList.map((user) => {
              return (
                  <Table.Tr>
                    <Table.Td>{user.name}</Table.Td>
                    <Table.Td>{user.email}</Table.Td>
                    <Table.Td>{user.number}</Table.Td>
                    <Table.Td>{user.message}</Table.Td>
                    <Table.Td>
                    <Button justify="center" variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }} 
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Button>
                    </Table.Td>
                  </Table.Tr>
                )
              })
            }
            </Table.Tbody>

        </Table>
      </Table.ScrollContainer>
    )
  }
        
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="red">
            <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>

  return (
    <Container>
    <div style={{ marginTop: '50px' }}>
      {
        displayUser()
      }
    </div>
    </Container>
  );
}

export default UserFeedback;