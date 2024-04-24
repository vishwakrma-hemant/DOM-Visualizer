"use client";
import { Menu, Group, Center, Burger, Container, Title,Divider,Button,Box,Drawer,ScrollArea
,rem,UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./navbar.module.css";
import Link from "next/link";
import ActionTog from "./action/page";

const links = [
  { link: "/", label: "Home" },
  // {
  //   link: "#1",
  //   link: "/about",
  //   label: "About",
  //   // links: [
  //   //   { link: '/docs', label: 'About' },
  //   //   { link: '/resources', label: 'Information' },
  //   //   { link: '/community', label: 'Help?' },
  //   //   { link: '/blog', label: 'Content' },
  //   // ],
  // },
  // { link: '/blog', label: 'Blog' },
  // {
  //   link: '#2',
  //   label: 'Support',
  //   links: [
  //     { link: '/faq', label: 'FAQ' },
  //     { link: '/demo', label: 'Book a demo' },
  //     { link: '/forums', label: 'Forums' },
  //   ],
  
  { link: "/feature", label: "Feature" },
  { link: "/about", label: "About" },
  { link: "/contact", label: "Contact Us" },
  { link: "/feedback", label: "Feedback" },
];

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <Box>
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>
          <Title order={3} component={Link} href="/" className={classes.title}>
            DOM Visualizer
          </Title>
          <Group gap={1} visibleFrom="sm" fs={'md'}>
            {items}
          </Group>
          <Group my="lg" visibleFrom="sm"  mr={'sm'}>
            <Button component={Link} href='/signup' >Sign up</Button>
            <Button  component={Link} href='/login' >Log in</Button>
          </Group>
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          <ActionTog />
        </div>
      </Container>
    </header>
    <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="DOM Visualizer"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="/" className={classes.link}>
            Home
          </a>
          {/* <Collapse in={linksOpened}>{links}</Collapse> */}
          <a href="/feature" className={classes.link}>
            feature
          </a>
          <a href="contact" className={classes.link}>
            ContactUs
          </a>
          <a href="/about" className={classes.link}>
            About
          </a>
          <a href="/feedback" className={classes.link}>
            Feedback
          </a>


          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
          <ActionTog />
        </ScrollArea>
      </Drawer>
      </Box>
  );
};

export default Navbar;
