import React, { useState } from "react";
import { useTranslation, withTranslation } from "react-i18next"; // Importe le hook useTranslation pour la traduction
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
} from "@mui/material"; // Importe les composants nécessaires de Material-UI
import MenuIcon from "@mui/icons-material/Menu"; // Importe l'icône de menu de Material-UI
import headerStyles from "./Header.style"; // Importe les styles CSS du composant Header
import { Link } from "react-router-dom"; // Importe le composant Link de react-router-dom pour la navigation
import userIcon from "../../utilities/img/usericon/usericon.png"; // Importe l'icône utilisateur
import frenchIcon from "../../utilities/img/translate/french_icon.png"; // Importe l'icône du drapeau français
import englishIcon from "../../utilities/img/translate/english_icon.png"; // Importe l'icône du drapeau anglais

/**
 * Composant représentant l'en-tête de l'application.
 * @component
 * @returns {JSX.Element} Le composant Header.
 */
const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null); // État pour gérer le menu de navigation
  const [anchorElUser, setAnchorElUser] = useState(null); // État pour gérer le menu de l'utilisateur
  const { t, i18n } = useTranslation(); // Initialise la fonction de traduction
  const { flagInput, typographyMobile, root } = headerStyles; // Destructure les styles du fichier headerStyles

  // Liens de navigation
  const navigationLinks = [
    { name: t("lodging"), to: "/" },
    { name: t("airstrip"), to: "/lapiste" },
    { name: t("pictures"), to: "/photos" },
    { name: t("surroundings"), to: "/alentours" },
    { name: t("contactUs"), to: "/contact" },
    { name: t("reservation"), to: "/reservation" },
  ];

  // Liens utilisateur
  const userLinks = [
    { name: t("profile"), to: "/profile" },
    { name: t("connection"), to: "/connexion" },
    { name: t("accountCreation"), to: "/créeruncompte" },
  ];

  /**
   * Change la langue de l'application.
   * @param {string} language - La langue vers laquelle basculer (fr ou en).
   */
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  // Gère l'ouverture du menu de navigation
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // Gère l'ouverture du menu de l'utilisateur
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // Gère la fermeture du menu de navigation
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Gère la fermeture du menu de l'utilisateur
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Rendu du composant Header
  return (
    <AppBar position="static" style={root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo et lien vers la page d'accueil */}
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

          {/* Menu de navigation pour les petits écrans */}
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
            {/* Menu de navigation pour les petits écrans */}
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
                  {/* Lien de navigation */}
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

          {/* Nom de l'application pour les petits écrans */}
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

          {/* Liens de navigation pour les grands écrans */}
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

          {/* Changer la langue de l'application */}
          <Box
            sx={{ flexGrow: 0, display: "flex", flexDirection: "row" }}
          >
            {/* Bouton pour basculer vers le français */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <IconButton onClick={() => changeLanguage("fr")} sx={{ p: 0 }}>
                <img src={frenchIcon} alt="French Flag" style={flagInput} />
              </IconButton>
              {/* Bouton pour basculer vers l'anglais */}
              <IconButton
                onClick={() => changeLanguage("en")}
                sx={{ paddingTop: 1, paddingBottom: 0 }}
              >
                <img src={englishIcon} alt="English Flag" style={flagInput} />
              </IconButton>
            </div>

            {/* Bouton pour ouvrir le menu de l'utilisateur */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={t("user")}
                  src={userIcon}
                  sx={{ color: "white" }}
                />
              </IconButton>
            </Tooltip>
            {/* Menu de l'utilisateur */}
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
                  {/* Lien vers les paramètres utilisateur */}
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

// Enrichit le composant Header avec la fonction de traduction (i18n)
export default withTranslation()(Header);
