import React from "react";
import { withTranslation } from "react-i18next";
import MainPageStyles from "./MainPage.style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Body from "../../components/Body/Body";
import { Link } from "react-router-dom";

const MainPage = () => {
  const { root } = MainPageStyles;
  return (
    <div style={root}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default withTranslation()(MainPage);
