import {
  TextInput,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ActionIcon,
  Tooltip,
  rem,
  Button,
} from '@mantine/core';
import { IconBulb, IconUser, IconCheckbox, IconSearch, IconPlus } from '@tabler/icons-react';
import { UserButton } from './UserButton/UserButton';
import classes from './sidebar.module.css';
import useDiagramContext from '@/context/DiagramContext';

const links = [
  { icon: IconBulb, label: 'Activity', notifications: 3 },
  { icon: IconCheckbox, label: 'Tasks', notifications: 4 },
  { icon: IconUser, label: 'Contacts' },
];

export default function Sidebar() {

  const { diagramList, createNewDiagram, setSelDiagram } = useDiagramContext();

  const mainLinks = diagramList.map((diagram) => (
    <UnstyledButton key={diagram._id} className={classes.mainLink} onClick={e => setSelDiagram(diagram)}>
      <div className={classes.mainLinkInner}>
        <IconBulb size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{diagram.name}</span>
      </div>
    </UnstyledButton>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.section}>
        <UserButton />
      </div>

      <Button onClick={createNewDiagram} my={10} leftSection={<IconPlus />} variant='filled' >New</Button>

      <TextInput
        placeholder="Search"
        size="xs"
        leftSection={<IconSearch style={{ width: rem(12), height: rem(12) }} stroke={1.5} />}
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: 'none' } }}
        mb="sm"
      />

      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>
    </nav>
  );
}