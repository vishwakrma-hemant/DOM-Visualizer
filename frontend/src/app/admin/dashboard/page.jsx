"use client";
import {
  AppShell,
  Box,
  Burger,
  Button,
  Flex,
  Group,
  Skeleton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Sidebar from "../adminsidebar/page";
import { DomProvider } from "@/context/DomContext";
import useDiagramContext from "@/context/DiagramContext";
import { useEffect } from "react";
import AdminProfile from "../AdminProfile/page";

const Layout = ({ children }) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const { diagramList, setDiagramList, loadDiagrams } = useDiagramContext();

  useEffect(() => {
    loadDiagrams();
  }, []);

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
          <Group h="100%" px="md" mt='md'>
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
        <DomProvider>{children}</DomProvider>
      </AppShell.Main>
    </AppShell>
  );
};
export default Layout;
