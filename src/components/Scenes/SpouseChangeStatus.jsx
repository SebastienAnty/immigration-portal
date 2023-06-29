import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { spouseCitizen } from "./documents/ChangeOfStatusDoc";
import "./styles/changeofStatus.css";

const SpouseChangeStatus = () => {
  const [state, setState] = useState({
    left: false,
    right: false,
  });

  const spouseOfUSCitizen = [
    "I-485, Application to Register Permanent Residence or Adjust Status",
    "I-864, Affidavit of Support Under Section 213A of the INA",
    "I-765, Application for Employment Authorization",
    "I-131, Application for Travel Document",
  ];

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
        <ListItem>
          <ListItemText secondary="Spouse of US Citizen" />
        </ListItem>
        {spouseOfUSCitizen.map((item, index) => (
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
    <div style={{ marginTop: 30 }}>
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
          {spouseCitizen.map((section, index) => (
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
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>Spouse List</Button>
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
      </div>
    </div>
  );
};

export default SpouseChangeStatus;
