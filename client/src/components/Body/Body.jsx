import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../../layout/MainPage";
import Home from "../../layout/Home";
import Contact from "../../layout/Contact";
import AdminProfile from "../../layout/AdminProfile";
import AirstripData from "../../layout/AirstripData";
import Pictures from "../../layout/Pictures";
import Reservation from "../../layout/Reservation";
import SurroundingArea from "../../layout/SurroundingArea";
import UserProfile from "../../layout/UserProfile";
import LegacyTerms from "../Footer/LegacyTerms";
import Rgpd from "../Footer/Rgpd";
import { Box, useMediaQuery } from "@mui/material";
import bodyStyles from "./Body.style";
import { withTranslation } from "react-i18next";
import AccountCreation from "../../layout/Account/AccountCreation";
import axios from "axios";
import Login from "../../layout/Account/Login/Login";

const Body = ( {handleLogin} ) => {
  const { root, rootSmallScreen } = bodyStyles;
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const rootStyle = isSmallScreen ? rootSmallScreen : root;

  const handleSubmit = async (formData) => {
    try {
      console.log("Données du formulaire soumises depuis MainPage :", formData);

      const response = await axios.post(
        "http://localhost:5000/api/user",
        formData,
      );

      console.log(response.data);
    } catch (error) {
      console.error(
        "Erreur lors de la soumission du formulaire depuis MainPage :",
        error,
      );
    }
  };
  return (
    <Box style={rootStyle}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/administrateur" element={<AdminProfile />} />
        <Route path="/lapiste" element={<AirstripData />} />
        <Route path="/photos" element={<Pictures />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/alentours" element={<SurroundingArea />} />
        <Route path="/utilisateur" element={<UserProfile />} />
        <Route path="/termesetservices" element={<LegacyTerms />} />
        <Route path="/RGPD" element={<Rgpd />} />
        <Route
          path="/créeruncompte"
          element={<AccountCreation handleSubmit={handleSubmit} />}
        />
      </Routes>
    </Box>
  );
};
export default withTranslation()(Body);
