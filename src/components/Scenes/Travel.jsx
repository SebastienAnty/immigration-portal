import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { travelDocs } from "./documents/TravelDoc";
import "./styles/travel.css";

const Travel = () => {
  const [state, setState] = useState({
    left: false,
  });

  const travelArray = ["I-131, Application for Travel Document"];

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
          <ListItemText secondary="Travel" />
        </ListItem>
        {travelArray.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={`${index + 1} - ${item}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="travel-container">
      <h1 className="travel-title">Travel Document</h1>
      <div className="asylum-line"></div>
      <ol>
        {travelDocs.map((item, index) => (
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
  );
};

export default Travel;
