import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { widowVawaDocs } from "./documents/WidowVawaDoc";

const WidowVawa = () => {
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
        {widowVawaDocs.map((section, index) => (
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
      <div className="vc-container">
        <div className="vc-section-container">
          <div className="vc-line"></div>
          <h1 className="vc-title">WIDOW(ER)/VAWA</h1>
          <div className="vc-line"></div>
          <ol>
            <li
              style={{
                marginTop: 50,
                marginBottom: 50,
              }}
            >
              (I-360, Petition for Ameriasian, Widow(er) or Special Immigrant)
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
      </div>
    </>
  );
};

export default WidowVawa;
