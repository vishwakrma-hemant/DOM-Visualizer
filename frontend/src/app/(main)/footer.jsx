'use client';
import { Text, Container, ActionIcon, Group,Title, rem,a} from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconBrandGmail } from '@tabler/icons-react';
import classes from './footer.module.css';
import Link from 'next/link';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Live DOM Update', link: '/liveUpdate' },
      { label: 'Drag & Drop', link: '/dragDrop' },
      { label: 'DOM Structure', link: '/domStructure' }
    ],
  },
  // {
  //   title: 'Project',
  //   links: [
  //     { label: 'Contribute', link: '#' },
  //     { label: 'Media assets', link: '#' },
  //     { label: 'Changelog', link: '#' },
  //     { label: 'Releases', link: '#' },
  //   ],
  // },
  {
    title: 'Community',
    links: [
      { label: 'Follow on LinkedIn', link:'https://www.linkedin.com/in/hemant-kumar-7054b4267/'  },
      { label: 'Email', link:'https://hemantk3335@gmail.com' },
      { label: 'GitHub discussions', link:'https://github.com/vishwakrma-hemant' },
    ],
  },
];

const Footer = () => {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component={Link}
        href={link.link}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container fluid className={classes.inner} mx={{ xs: 'sm', md: 'xl' }}>
        <div>
          <Title>DOM Visualizer</Title>
          {/* <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text> */}
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container fluid className={classes.afterFooter} mx={{ xs: 'sm', md: 'xl' }}>
        <Text c="dimmed" size="sm">
          © 2024 DOM Visualizer. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle" component={Link} href='https://www.linkedin.com/in/hemant-kumar-7054b4267/'>
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle" component={Link} href='https://github.com/vishwakrma-hemant?tab=repositories'>
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle" component={Link} href='https://hemantk3335@gmail.com'>
            <IconBrandGmail style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
export default Footer;