import { useState } from 'react';
import { Group, Code,Text } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconDashboard,
  IconUser,
} from '@tabler/icons-react';
import classes from './sidebar.module.css';
import Link from 'next/link'; 

const data = [
  { link: '/admin/ControlPanel/userControl', label: 'Users', icon: IconUser},
  { link: '/admin/ControlPanel/AdminProfile', label: 'Dashboard', icon: IconDashboard },
  { link: '/admin/ControlPanel/userControl', label: 'Security', icon: IconFingerprint },
  { link: 'admin/ControlPanel/userControl', label: 'SSH Keys', icon: IconKey },
  { link: 'admin/ControlPanel/userControl', label: 'Databases', icon: IconDatabaseImport },
  { link: 'admin/ControlPanel/userControl', label: 'Authentication', icon: Icon2fa },
  { link: 'admin/ControlPanel/userControl', label: 'Other Settings', icon: IconSettings },
];

const Sidebar = () => {
  const [active, setActive] = useState('Users');

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        // event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Text order={3}>DOM</Text>
          <Code fw={700}>Visualizer</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
export default Sidebar;