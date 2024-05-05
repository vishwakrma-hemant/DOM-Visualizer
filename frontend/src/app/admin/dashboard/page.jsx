'use client';
import { Group, Code, ScrollArea, rem ,Title} from '@mantine/core';
import {
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconUsers,
  IconLogout,
} from '@tabler/icons-react';
import classes from './sidebar.module.css';
// import { LinksGroup } from './navminimal';
import Link from 'next/link';
import { LinksGroup } from './innerSidebar/page';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Users',
    icon: IconUsers,
    href:'/UserControl'
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
  },
  {
    label: 'Logout',
    icon: IconLogout,
  },
];

const Sidebar = () =>{
  const link = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} component={Link} href={item.href} />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-around" >
          <Title order={2}>DOM</Title>
          <Code fw={600}>Visualizer</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{link}</div>
      </ScrollArea>

      <div className={classes.footer}>
        {/* <UserButton />   */}
      </div>
    </nav>
  );
}
export default Sidebar;