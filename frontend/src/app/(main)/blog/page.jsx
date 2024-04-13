import { Text, Avatar, Group } from '@mantine/core';
import { comment } from 'postcss';
const  Blog =() =>{
  return (
    <div>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
          alt="Hemant Kumar"
          radius="xl"
        />
        <div>
          <Text size="sm">Hemant Kumar</Text>
          <Text size="xs" c="dimmed">
            10 minutes ago
          </Text>
        </div>
      </Group>
      <Text pl={54} pt="sm" size="sm">
        This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa
        concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has
        water spouts that protrude from its shell. The water spouts are very accurate.
      </Text>
    </div>
  );
}
 export default Blog;