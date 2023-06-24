import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { asylum } from "./documents/AsylumDoc";
import "./styles/asylum.css";

const AsylumScene = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText secondary="Asylum" />
        </ListItem>
        <ListItemButton>
          <ListItem>
            I-589, Application for Asylum and for Withholding of Removal
          </ListItem>
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <div className="asylum-container">
        <h1 className="asylum-title">Asylum</h1>
        <div className="asylum-line"></div>
        <ol>
          {asylum.map((item, index) => (
            <li className="asylum-list" key={index}>
              {item}
            </li>
          ))}
        </ol>
        {["Open List"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default AsylumScene;
