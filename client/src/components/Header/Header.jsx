import React, { useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import headerStyles from "./Header.style";
import { Link } from "react-router-dom";
import userIcon from "../../utilities/img/usericon/usericon.png";
import frenchIcon from "../../utilities/img/translate/french_icon.png";
import englishIcon from "../../utilities/img/translate/english_icon.png";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { t, i18n } = useTranslation();
  const { flagInput, typographyMobile, root } = headerStyles;

  const navigationLinks = [
    { name: t("lodging"), to: "/" },
    { name: t("airstrip"), to: "/lapiste" },
    { name: t("pictures"), to: "/photos" },
    { name: t("surroundings"), to: "/alentours" },
    { name: t("contactUs"), to: "/contact" },
    { name: t("reservation"), to: "/reservation" },
  ];

  const userLinks = [
    { name: t("profile"), to: "/profile" },
    { name: t("connection"), to: "/connexion" },
    { name: t("accountCreation"), to: "/créeruncompte" },
  ];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              width: "10vw",
              fontFamily: "Quicksand, sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {t("escale")}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navigationLinks.map((item) => (
                <MenuItem key={item.name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    component={Link}
                    to={item.to}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      fontFamily: "Quicksand, sans-serif",
                    }}
                  >
                    {item.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            style={typographyMobile}
          >
            {t("escale")}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navigationLinks.map((item) => (
              <Button
                key={item.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Quicksand, sans-serif",
                  textDecoration: "none",
                }}
                component={Link}
                to={item.to}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Box
            sx={{ flexGrow: 0, display: "flex", flexDirection: "row" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <IconButton onClick={() => changeLanguage("fr")} sx={{ p: 0 }}>
                <img src={frenchIcon} alt="French Flag" style={flagInput} />
              </IconButton>
              <IconButton
                onClick={() => changeLanguage("en")}
                sx={{ paddingTop: 1, paddingBottom: 0 }}
              >
                <img src={englishIcon} alt="English Flag" style={flagInput} />
              </IconButton>
            </div>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={userIcon}
                  sx={{ color: "white" }}
                />
              </IconButton>
            </Tooltip>
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
              {userLinks.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Typography
                    component={Link}
                    textAlign="center"
                    to={setting.to}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      fontFamily: "Quicksand, sans-serif",
                    }}
                  >
                    {setting.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withTranslation()(Header);
