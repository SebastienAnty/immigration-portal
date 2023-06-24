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
  familyPetitionAsylee,
} from "./documents/PetitionNoCOS";
import "./styles/petition.css";

const FamilyPetitionNoCOS = () => {
  const noStatusChangeSpouseArray = [
    "I-130, Petition for Alien Relative",
    "I-130A, Supplemental Information for a Spouse Beneficiary",
  ];
  const noStatusChangeFamilyArray = [
    "I-130, Petition for Alien Relative",
    "I-130A, Supplemental Information for a Spouse Beneficiary",
    "One I-130 application is necessary per son/daughter",
    "If the petitioner is a US citizen, you can include the spouse and children of the petitioner's child in the application",
  ];

  const noStatusChangeAsyleeArray = [
    "I-730, Refugee/Asylee Relative Petitions",
    "Each beneficiary needs his own I-730 application",
    "If an unmarried child has children, the child will be included in the parent's application, if the child was born before the asylum was granted",
  ];

  const [state, setState] = useState({
    left: false,
    rightParentChildList: false,
    rightAsyleeList: false,
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
        {noStatusChangeSpouseArray.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={`${index + 1} - ${item}`} />
              </ListItemButton>
            </ListItem>
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
        <ListItem>
          <ListItemText secondary="Petition for Parents or Child in US" />
        </ListItem>
        {noStatusChangeFamilyArray.map((item, index) => (
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

  const asyleeList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText secondary="Petition for Spouse/Child(ren) of Asylee" />
        </ListItem>
        {noStatusChangeAsyleeArray.map((item, index) => (
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
            Family Petition Without Change of Status
          </h1>
        </div>
        <div className="petition-container">
          <div className="petitionCard-container">
            <div className="petition-line"></div>
            <h1 className="petition-title">Petition for Spouses in US</h1>
            <div className="petition-line"></div>
            {familyPetitionSpouse.map((section, index) => (
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
            {familyPetitionParentsChild.map((section, index) => (
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
            {["rightParentChildList"].map((anchor) => (
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

          <div className="petitionCard-container">
            <div className="petition-line"></div>
            <h1 className="petition-title">
              Family Petition for Spouse/Child(ren) of Asylee
            </h1>
            <div className="petition-line"></div>
            {familyPetitionAsylee.map((section, index) => (
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
            {["rightAsyleeList"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  Parent/Child List
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {asyleeList(anchor)}
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
