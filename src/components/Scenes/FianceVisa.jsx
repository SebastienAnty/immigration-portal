import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { fianceVisa } from "./documents/FianceVisaDoc";

const FianceVisa = () => {
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

  const fianceArray = [
    "I-129, Petition for Alien Fiancé(e)",
    "I-134A, Affidavit of Support",
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText secondary="Fiancé Visa" />
        </ListItem>
        {fianceArray.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={`${index + 1} - ${item}`} />
              </ListItemButton>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="bidenCard-container">
      <div className="vc-line"></div>
      <h1 className="vc-title">Fiancé(e) Visa</h1>
      <div className="vc-line"></div>
      {fianceVisa.map((section, index) => (
        <React.Fragment key={index}>
          <h2>{`${index + 1}. ${section.title}`}</h2>
          {section.items && (
            <ol>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>- {item}</li>
              ))}
            </ol>
          )}
        </React.Fragment>
      ))}
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

export default FianceVisa;
