"use client";
import {
  AppShell,
  Burger,
  Flex,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AdminProfile from "./AdminProfile/page";
import Sidebar from './dashboard/page'

const Navbar = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
      layout="alt"
    >
      <AppShell.Header>
        <Flex justify="space-between" align="top">
          <Group h="100%" px="md" py='md'>
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
            />
          </Group>
           <AdminProfile /> 
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar>
    <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
      </AppShell.Main>
    </AppShell>
  );
};
export default Navbar;
