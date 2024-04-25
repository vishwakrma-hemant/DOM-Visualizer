'use client';
import { SimpleGrid, Card, Image, Text, Container, AspectRatio ,Title} from '@mantine/core';
import classes from './Features.module.css';
import Link from 'next/link';

const mockdata = [
  {
    title: 'Live DOM Update',
    image:
     'https://thumbs.dreamstime.com/b/update-system-upgrade-software-version-technology-concept-virtual-screen-217164383.jpg',
     href:'../dragDrop'
      // date: 'August 18, 2022',
  },
  {
    title: 'Drag & Drop',
    image:
      'https://cdn.dribbble.com/users/945601/screenshots/15180885/media/3f9083d5b99ac819b0c008c1d302854b.png?resize=1200x900&vertical=center',
      href:'../dragDrop'
      // date: 'August 27, 2022',
  },
  {
    title: 'Improve Developer Productivity',
    image:
    'https://imgs.search.brave.com/GtU02MgHA2WlGH_Qh2JGF8xlclRgCwzaMESW_8WGg4M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzI3LzI0LzYx/LzM2MF9GXzYyNzI0/NjE2Ml9lV3FnUGh6/emVzSDZaR2Y4MUYy/Sm9sVTIyWjRDeEY1/cS5qcGc',
      href :'../contact'
      // date: 'September 9, 2022',
  },
  {
    title: 'Provide DOM Structure',
    image:
      'https://imgs.search.brave.com/hfo5gXLGVESx6YG_kZdyKbJ6oykvQ7DFIPfdrNQ58bg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaXRhbG9jZWFu/LmNvbS9fbmV4dC9z/dGF0aWMvbWVkaWEv/aW50cm8tdG8tY2xv/dWQuZDQ5YmM1Zjcu/anBlZw',
    href:'../feedback'
    // date: 'September 12, 2022',
  },
];

const Feature =() =>{

  const cards = mockdata.map((article) => (
    <Link href={article.href} className={classes.card_item}>

    <Card key={article.title} p="md" radius="md"className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
    </Link>
  ));

  return (

      <SimpleGrid cols={{ base: 1, md: 2 }} my={'sm'}>{cards}</SimpleGrid>
    
    
  );
}

export default Feature;