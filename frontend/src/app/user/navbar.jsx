'use client';
import cx from 'clsx';
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import classes from './Navbar.module.css';
import useAppContext from '@/context/AppContext';

const user = {
  name: '',
  email: '',
  image: 'https://img.freepik.com/premium-vector/businessman-character-avatar-isolated_24877-5037.jpg?w=740',
};

const Navbar = () => {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const { currentUser,logout} = useAppContext();
  
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

  // const items = tabs.map((tab) => (
  //   <Tabs.Tab value={tab} key={tab}>
  //     {tab}
  //   </Tabs.Tab>
  // ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md"> 
        <Group justify="end">
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group gap={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                  <Text fw={500} size="sm" lh={1} mr={3}>
                  {currentUser.name}
                  </Text>
                  <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item
                leftSection={
                  <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Profile
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconSwitchHorizontal style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Change account
              </Menu.Item>
              <Menu.Item
              onClick={logout}
                color='red'
                leftSection={
                  <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Logout
              </Menu.Item>

            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </div>
  );
}
export default Navbar;