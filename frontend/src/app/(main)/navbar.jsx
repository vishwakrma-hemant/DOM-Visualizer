"use client";
import { Menu, Group, Center, Burger, Container, Title,Divider,Button } from "@mantine/core";
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
  const [opened, { toggle }] = useDisclosure(false);

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
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>
          <Title order={2} component={Link} href="/" className={classes.title}>
            DOM Visualizer
          </Title>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Group my="lg">
            <Button component={Link} href='/signup'>Sign up</Button>
            <Button  component={Link} href='/login'>Log in</Button>
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <ActionTog />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
