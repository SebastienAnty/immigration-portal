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
        {greenCard2Perm.map((section, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={`${index + 1} - ${section.title}`} />
              </ListItemButton>
            </ListItem>
            {section.items && (
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem disablePadding>
                  <ListItemText
                    primary={section.itemsTitle}
                    primaryTypographyProps={{ variant: "subtitle2" }}
                  />
                </ListItem>
                {section.items.map((item, itemIndex) => (
                  <ListItem key={itemIndex} disablePadding>
                    <ListItemText
                      primary={`- ${item}`}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className="greenCard-container">
        <div className="petition-line"></div>
        <h1 className="petition-title">2 Year Green Card to Permanent</h1>
        <div className="petition-line"></div>
        <ol>
          <li
            style={{
              marginTop: 50,
              marginBottom: 50,
            }}
          >
            - (I-751, Petition to Remove Conditions on Residence)
          </li>
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

export default GreenCard;
