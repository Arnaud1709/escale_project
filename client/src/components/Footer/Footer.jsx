import React from "react";
import { useTranslation } from "react-i18next"; // Importe le hook useTranslation pour la traduction
import { Link } from "react-router-dom"; // Importe le composant Link de react-router-dom pour la navigation
import { useMediaQuery } from "@mui/material"; // Importe le hook useMediaQuery de Material-UI pour les requêtes media
import { withTranslation } from "react-i18next"; // Importe la fonction de traduction
import footerStyles from "./Footer.style"; // Importe les styles CSS du composant Footer

/**
 * Composant représentant le pied de page de l'application.
 * @component
 * @returns {JSX.Element} Le composant Footer.
 */
const Footer = () => {
  const { t } = useTranslation(); // Initialise la fonction de traduction
  const isSmallScreen = useMediaQuery("(max-width: 900px)"); // Vérifie la taille de l'écran
  const {
    root,
    rootSmallScreen,
    footerSection,
    footerLinks,
    footerLinksDiv,
    linkStyle,
    contactData,
    titleFooter,
    footerCopyright,
  } = footerStyles; // Destructure les styles du fichier footerStyles

  // Définit les liens pour les différentes sections du pied de page
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
    // Rendu du composant Footer
    <div style={isSmallScreen ? rootSmallScreen : root}>
      <div style={footerSection}>
        <div style={footerLinks}>
          {/* Section pour les liens liés à 'Escale' */}
          <div style={footerLinksDiv}>
            <h4 style={titleFooter}>{t("escale")}</h4>
            {escaleLinks.map((item) => (
              <Link style={linkStyle} to={item.to} key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>
          {/* Section pour les liens utilisateur */}
          <div style={footerLinksDiv}>
            <h4 style={titleFooter}>{t("user")}</h4>
            {userLinks.map((item) => (
              <Link style={linkStyle} to={item.to} key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>
          {/* Section de contact */}
          <div style={footerLinksDiv}>
            <h4 style={titleFooter}>{t("contactUs")}</h4>
            <p style={contactData}>
              {t("email")} <br />
              {t("number")}<br />
              {t("availability")} <br />
            </p>
          </div>
          {/* Section pour les liens légaux */}
          <div style={footerLinksDiv}>
            <h4 style={titleFooter}>{t("legalInfo")}</h4>
            {legacyLinks.map((item) => (
              <Link style={linkStyle} to={item.to} key={item.name}>
                {item.name}
              </Link>
            ))}
            {/* Section pour les informations de copyright */}
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

// Enrichit le composant Footer avec la fonction de traduction (i18n)
export default withTranslation()(Footer);
