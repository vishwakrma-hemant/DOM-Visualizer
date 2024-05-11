'use client';
import { Group, Code, ScrollArea,Stack,Title,Box} from '@mantine/core';
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
import Link from 'next/link';
import { LinksGroup, NavbarLinksGroup } from './innerSidebar/page';
// import { UserButton } from '@/app/user/UserButton/UserButton';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Users',
    icon: IconUsers,
    href:'/Users'
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    href:'/Releases'
  },
  { label: 'Analytics', icon: IconPresentationAnalytics,
  href:'/Analytics'
   },
  { label: 'Contracts', icon: IconFileAnalytics,
  href:'/Contracts'
   },
  { label: 'Settings', icon: IconAdjustments,
  href:'/Settings'
   },
  {
    label: 'Security',
    icon: IconLock,
    href:'/Security'
  },
  // {
  //   label: 'Logout',
  //   icon: IconLogout,
  //   className:'claases.logout'
  // },

];

const Sidebar = () =>{
  const link = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  
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
        <div className={classes.linksInner}>{link}
        </div>
      </ScrollArea>

      <div className={classes.footer} justify='center'>
        {/* <UserButton /> */}
  
      </div>
    </nav>
  );
}
export default Sidebar;