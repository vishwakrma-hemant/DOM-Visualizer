"use client";
import { AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { DomProvider } from "@/context/DomContext";
import useDiagramContext from "@/context/DiagramContext";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const { diagramList, setDiagramList, loadDiagrams } = useDiagramContext();

  useEffect(() => {
    loadDiagrams();
  }, [])
  

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
          {/* <Navbar /> */}
      <AppShell.Header>
        <Group h="100%" px="md">
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
