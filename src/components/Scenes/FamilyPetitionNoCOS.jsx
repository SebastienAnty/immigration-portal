import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  familyPetitionSpouse,
  familyPetitionParentsChild,
} from "./documents/PetitionNoCOS";
import "./styles/petition.css";

const FamilyPetitionNoCOS = () => {
  const noStatusChangeArray = [
    "(I-130, Petition for Alien Relative)",
    "(I-130A, Supplemental Information for a Spouse Beneficiary)",
    "(I-485, Application to Register Permanent Residence or Adjust Status)",
    "(I-864, Affidavit of Support Under Section 213A of the INA)",
    "(I-765, Application for Employment Authorization)",
    "(I-131, Application for Travel Document)",
  ];
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
        {familyPetitionSpouse.map((section, index) => (
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

  const parentChildList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {familyPetitionParentsChild.map((section, index) => (
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
          <h1 style={{ color: "white", fontSize: 40 }}>
            Family Petition Without Change of Status
          </h1>
        </div>
        <div className="petition-container">
          <div className="petitionCard-container">
            <div className="petition-line"></div>
            <h1 className="petition-title">Petition for Spouses in US</h1>
            <div className="petition-line"></div>
            {noStatusChangeArray.map((item, index) => (
              <ol>
                <li key={index}>- {item}</li>
              </ol>
            ))}
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

          <div className="petitionCard-container">
            <div className="petition-line"></div>
            <h1 className="petition-title">
              Petition for Parents or Child in US
            </h1>
            <div className="petition-line"></div>
            {noStatusChangeArray.map((item, index) => (
              <ol>
                <li key={index}>- {item}</li>
              </ol>
            ))}
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  Parent/Child List
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {parentChildList(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyPetitionNoCOS;
