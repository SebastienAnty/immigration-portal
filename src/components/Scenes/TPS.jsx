import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { TPSInitial, TPSRenewal } from "./documents/TPSDoc";
import "./styles/tps.css";

const TPS = () => {
  const [state, setState] = useState({
    left: false,
    right: false,
  });

  const tpsArray = [
    "(I-821, Application for Protected Status)",
    "(I-765, Request for Employment Authorization)",
    "(I-601, Application for Waiver of Grounds of Inadmissibility - of applicable)",
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

  const initialList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {TPSInitial.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={`${index + 1} - ${text}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const renewalList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {TPSRenewal.map((text, index) => (
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
    <>
      <div style={{ marginTop: 45 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1 style={{ color: "white", fontSize: 40 }}>
            Temporary Status Change
          </h1>
        </div>
        <div className="tps-wrapper">
          <div className="petitionCard-container">
            <div className="petition-line"></div>
            <h1 className="petition-title">TPS Initial</h1>
            <div className="petition-line"></div>
            {tpsArray.map((item, index) => (
              <ol style={{ marginTop: 50, marginBottom: 25 }}>
                <li key={index}>- {item}</li>
              </ol>
            ))}
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>Open List</Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {initialList(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>

          <div className="petitionCard-container">
            <div className="petition-line"></div>
            <h1 className="petition-title">TPS Renewal</h1>
            <div className="petition-line"></div>
            {tpsArray.map((item, index) => (
              <ol style={{ marginTop: 50, marginBottom: 25 }}>
                <li key={index}>- {item}</li>
              </ol>
            ))}
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>Open List</Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {renewalList(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TPS;
