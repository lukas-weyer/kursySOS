import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { GET_SINGLE_COURSE_QUERY } from "../queries/coursesQueries";

import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const drawerWidth = 240;

export function LessonsList() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      component="nav"
      aria-labelledby="lista-lekcji"
      subheader={
        <ListSubheader component="div" id="lista-lekcji">
          Lista lekcji
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Rozdział 1" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>Lekcja 1</ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
export default function CourseDrawer() {
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_SINGLE_COURSE_QUERY, {
    variables: {
      slug: router.query.slug
    }
  });

  if (loading) return <p>Ładuje</p>;
  if (error) return <p>błąd</p>;

  console.log(data);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="lessons list"
    >
      <Drawer
        variant="temporary"
        anchor="right"
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
        }}
      >
        <Toolbar />
        <LessonsList />
      </Drawer>
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          display: { xs: "none", sm: "block" },
          flexShrink: 0,
          width: drawerWidth,
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
        }}
      >
        <Toolbar />
        <LessonsList />
      </Drawer>
    </Box>
  );
}
