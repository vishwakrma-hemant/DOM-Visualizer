import { TextInput, Code, UnstyledButton, rem, Button } from "@mantine/core";
import { IconBulb, IconSearch, IconPlus } from "@tabler/icons-react";
import { UserButton } from "./UserButton/UserButton";
import classes from "./sidebar.module.css";
import useDiagramContext from "@/context/DiagramContext";
import { useState } from "react";
import useAppContext from "@/context/AppContext";

export default function Sidebar() {
  const {
    diagramList,
    setDiagramList,
    createNewDiagram,
    masterList,
    setSelDiagram,
  } = useDiagramContext();
  const [searchDiagram, setSearchDiagram] = useState("");

  const { currentUser } = useAppContext();

  const mainLinks = diagramList.map((diagram) => (
    <UnstyledButton
      key={diagram._id}
      className={classes.mainLink}
      onClick={(e) => setSelDiagram(diagram)}
    >
      <div className={classes.mainLinkInner}>
        <IconBulb size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{diagram.name}</span>
      </div>
    </UnstyledButton>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.section}>{currentUser && <UserButton />}</div>

      <Button
        onClick={createNewDiagram}
        my={10}
        leftSection={<IconPlus />}
        variant="filled"
      >
        New
      </Button>

      <TextInput
        onChange={(e) => {
          setDiagramList(
            masterList.filter((diagram) =>
              diagram.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
          );
        }}
        value={searchDiagram}
        placeholder="Search"
        size="xs"
        leftSection={
          <IconSearch
            style={{ width: rem(12), height: rem(12) }}
            stroke={1.5}
          />
        }
        rightSectionWidth={70}
        styles={{ section: { pointerEvents: "none" } }}
        mb="sm"
      />

      <div className={classes.section} style={{ overflow: "auto" }}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>
    </nav>
  );
}
