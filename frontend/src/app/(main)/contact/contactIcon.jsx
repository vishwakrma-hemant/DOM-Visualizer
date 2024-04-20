'use client';
import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './contactIcon.module.css';

// interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
//   icon: typeof IconSun;
//   title: React.ReactNode;
//   description: React.ReactNode;
// }

function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'hemantk3335@gmail.com', icon: IconAt },
  { title: 'Phone', description: '+91 9565 08 1456', icon: IconPhone },
  { title: 'Address', description: 'Lucknow', icon: IconMapPin },
  { title: 'Working hours', description: ' 10 a.m. – 06 p.m.', icon: IconSun },
];

const ContactIconsList = () =>{
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
export default ContactIconsList;