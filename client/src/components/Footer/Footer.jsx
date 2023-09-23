import React, { useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import footerStyles from "./Footer.style";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  const {
    root,
    rootSmallScreen,
    footerCopyright,
    footerLinks,
    footerLinksDiv,
    footerSection,
    linkStyle,
    titleFooter,
  } = footerStyles;

  const rootStyle = isSmallScreen ? rootSmallScreen : root;

  const escaleLinks = [
    { name: t("lodging"), to: "/" },
    { name: t("airstrip"), to: "/lapiste" },
    { name: t("pictures"), to: "/photos" },
    { name: t("surroundings"), to: "/alentours" },
    { name: t("contactUs"), to: "/contact" },
    { name: t("reservation"), to: "/reservation" },
  ];

  const legacyLinks = [
    { name: t("legalTerms"), to: "termesetservices" },
    { name: t("rgpd"), to: "/RGPD" },
  ];

  const userLinks = [
    { name: t("profile"), to: "/profile" },
    { name: t("connection"), to: "/connexion" },
    { name: t("accountCreation"), to: "/créeruncompte" },
  ];

  return (
    <div style={rootStyle}>
      <div style={footerSection}>
        <div style={footerLinks}>
          <div style={footerLinksDiv}>
            <h4 style={titleFooter}>{t("escale")}</h4>
            {escaleLinks.map((item) => (
              <Link style={linkStyle} to={item.to} key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>
          <div style={footerLinksDiv}>
            <h4 style={titleFooter}>{t("user")}</h4>
            {userLinks.map((item) => (
              <Link style={linkStyle} to={item.to} key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>
          <div style={footerLinksDiv}>
            <h4 style={titleFooter}>{t("contactUs")}</h4>
            <p>
              {t("email")} <br />
              {t("number")} 0671102975 <br />
              {t("availability")} <br />
            </p>
          </div>

          <div style={footerLinksDiv}>
            <h4 style={titleFooter}>{t("legalInfo")}</h4>
            {legacyLinks.map((item) => (
              <Link style={linkStyle} to={item.to} key={item.name}>
                {item.name}
              </Link>
            ))}
            <div style={footerCopyright}>
              <p>
                @{new Date().getFullYear()} {t("escale")} . {t("allRights")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Footer);
