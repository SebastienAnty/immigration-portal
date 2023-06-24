import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { greenCard2Perm } from "./documents/GreenCard2PermDoc";
import "./styles/greenCard.css";

const GreenCard = () => {
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
          <ListItemText secondary="2 Year Green Card to Permanent" />
        </ListItem>
        <ListItemButton>
          <ListItem>I-751, Petition to Remove Conditions on Residence</ListItem>
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <div className="greenCard-container">
        <div className="petition-line"></div>
        <h1 className="petition-title">2 Year Green Card to Permanent</h1>
        <div className="petition-line"></div>
        {greenCard2Perm.map((section, index) => (
          <React.Fragment key={index}>
            <h2>{`${index + 1}. ${section.title}`}</h2>
            {console.log(section.title)}
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
    </>
  );
};

export default GreenCard;
