import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { spouseCitizen, childCitizen } from "./documents/ChangeOfStatusDoc";
import "./styles/changeofStatus.css";

const ChangeOfStatus = () => {
  const [state, setState] = useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({
      ...state,
      [anchor]: open,
      [anchor === "left" ? "right" : "left"]: false,
    });
  };

  const spouseList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {spouseCitizen.map((section, index) => (
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

  const childList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {childCitizen.map((section, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={`${index + 1} - ${section.title}`} />
              </ListItemButton>
            </ListItem>
            {section.items && (
              <List sx={{ paddingLeft: "20px" }}>
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
      <div style={{ marginTop: 45 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1 style={{ color: "white", fontSize: 40 }}>Change of Status</h1>
        </div>
        <div className="cos-container">
          <div className="section-container">
            <div className="cos-line"></div>
            <h1 className="cos-title">Spouse of US Citizen</h1>
            <div className="cos-line"></div>
            <ol>
              <li
                style={{
                  marginTop: 50,
                  marginBottom: 50,
                }}
              >
                (I-751, Petition to Remove Conditions on Residence)
              </li>
            </ol>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  Spouse List
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {spouseList(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>

          <div className="section-container">
            <div className="cos-line"></div>
            <h1 className="cos-title">
              Child of US Citizen or Permanent Resident
            </h1>
            <div className="cos-line"></div>
            <ol>
              <li
                style={{
                  marginTop: 50,
                  marginBottom: 50,
                }}
              >
                (I-751, Petition to Remove Conditions on Residence)
              </li>
            </ol>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>Child List</Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {childList(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeOfStatus;
