import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import bodyStyles from "./Body.style";
import { withTranslation } from "react-i18next";

import Home from "../../layout/Home";
import Contact from "../../layout/Contact";
import AirstripData from "../../layout/AirstripData";
import Pictures from "../../layout/Pictures";
import Reservation from "../../layout/Reservation";
import SurroundingArea from "../../layout/SurroundingArea";
import UserProfile from "../../layout/Account/UserProfile";
import LegacyTerms from "../Footer/LegacyTerms";
import Rgpd from "../Footer/Rgpd";
import AccountCreation from "../../layout/Account/AccountCreation";
import Login from "../../layout/Account/Login";

/**
 * Composant représentant le corps principal de l'application.
 * @component
 * @returns {JSX.Element} Corps de l'application.
 */
const Body = () => {
  // Récupère les styles du composant Body
  const { root, rootSmallScreen } = bodyStyles;
  

  // Vérifie si l'écran est de petite taille
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  // Sélectionne le style en fonction de la taille de l'écran
  const rootStyle = isSmallScreen ? rootSmallScreen : root;

  return (
    // Boîte principale contenant les éléments du corps de l'application
    <Box style={rootStyle}>
      {/* Définit les routes de l'application */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/lapiste/*" element={<AirstripData />} />
        <Route path="/photos/*" element={<Pictures />} />
        <Route path="/reservation/*" element={<Reservation />} />
        <Route path="/alentours/*" element={<SurroundingArea />} />
        <Route path="/utilisateur/*" element={<UserProfile />} />
        <Route path="/termesetservices/*" element={<LegacyTerms />} />
        <Route path="/RGPD/*" element={<Rgpd />} />
        <Route path="/créeruncompte/*" element={<AccountCreation />} />
        <Route path="/connexion/*" element={<Login />} />
      </Routes>
    </Box>
  );
};

// Enrichit le composant Body avec la fonction de traduction (i18n)
export default withTranslation()(Body);
