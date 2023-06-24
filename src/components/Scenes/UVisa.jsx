import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { uVisaDocs } from "./documents/UVisaDoc";
import "./styles/uVisa.css";

const UVisa = () => {
  const [state, setState] = useState({
    left: false,
  });

  const uVisaArray = [
    "I-918, Petition for U Nonimmigrant Status",
    "I-192, Application for Advance Permission to Enter a Nonimmigrant",
  ];

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
          <ListItemText secondary="U VISA" />
        </ListItem>
        {uVisaArray.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={`${index + 1} - ${text}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className="uVisaCard-container">
      <div className="asylum-line"></div>
      <h1 className="asylum-title">U VISA</h1>
      <div className="asylum-line"></div>
      <ol>
        {uVisaDocs.map((item, index) => (
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

export default UVisa;
