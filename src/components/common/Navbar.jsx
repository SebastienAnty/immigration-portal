import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { auth } from "../../firebaseConfig";
import fileLogo from "../../components/assets/USAPROFileLogo.jpg";

const Navbar = ({ isLoggedIn, handleSignOut, displayName }) => {
  const navigation = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleQuestionnaire = () => {
    navigation("/questionnaire");
    handleCloseNavMenu();
  };

  const handleFamilyQuestionnaire = () => {
    navigation("/family-petition-questionnaire");
    handleCloseNavMenu();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = () => {
    navigation("/login");
    handleCloseNavMenu();
  };

  const handleSignOutClick = () => {
    auth
      .signOut()
      .then(() => {
        handleSignOut();
        navigation("/login");
        handleCloseUserMenu();
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#424242" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            src={fileLogo}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            USA File Pro
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {isLoggedIn && (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            )}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleQuestionnaire}>
                <Typography textAlign="center">Questionnaire</Typography>
              </MenuItem>
              <MenuItem onClick={handleFamilyQuestionnaire}>
                <Typography textAlign="center">
                  Family Petition Questionnaire
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <IconButton onClick={() => navigation("/")} sx={{ p: 0 }}>
            <Avatar
              src={fileLogo}
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {isLoggedIn && (
              <>
                <Button
                  onClick={() => handleQuestionnaire()}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Questionnaire
                </Button>
                <Button
                  onClick={() => handleFamilyQuestionnaire()}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Family Petition Questionnaire
                </Button>
              </>
            )}
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            USA File Pro
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={displayName}
                    src={
                      auth.currentUser?.providerData[0]?.photoURL ||
                      "/static/images/avatar.jpg"
                    }
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
              </Button>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleSignOutClick}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
