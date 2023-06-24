import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { petitionSpouses, petitionParents } from "./documents/PetitionDoc";
import "./styles/petition.css";

const FamilyPetition = () => {
  const [state, setState] = useState({
    left: false,
    right: false,
  });

  const familyPetitionArray = [
    "I-130, Petition for Alien Relative",
    "I-130A, Supplemental Information for a Spouse Beneficiary",
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
          <ListItemText secondary="Petition for Spouses in US" />
        </ListItem>
        {familyPetitionArray.map((item, index) => (
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

  const parentsList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText secondary="Petition for Parents or Child in US" />
        </ListItem>
        {familyPetitionArray.map((item, index) => (
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
    <>
      <div style={{ marginTop: 45 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1 style={{ color: "white", fontSize: 40 }}>
            Family Petition With Change of Status
          </h1>
        </div>
        <div className="petition-container">
          <div className="petitionCard-container">
            <div className="petition-line"></div>
            <h1 className="petition-title">Petition for Spouses in US</h1>
            <div className="petition-line"></div>
            {petitionSpouses.map((section, index) => (
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
            {petitionParents.map((section, index) => (
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
                  {parentsList(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyPetition;
