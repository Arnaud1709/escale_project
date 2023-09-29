import React, { useState } from "react";
import contactStyles from "./Contact.style";
import { withTranslation, useTranslation } from "react-i18next";
import {
  Button,
  Card,
  CardContent,
  useMediaQuery,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const {
    cardStyle,
    submitButton,
    submitButtonHover,
    titleForm,
    gridStyle,
    gridStyleNameSmallScreen,
    gridStyleFirstName,
    gridStyleLastName,
  } = contactStyles;
  const [hoveredItemIndex, setHoveredItemIndex] = useState(-1);
  const [submitButtonStyle, setSubmitButtonStyle] = useState(submitButton);

  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const firstNameStyle = isSmallScreen
    ? gridStyleNameSmallScreen
    : gridStyleFirstName;
  const lastNameStyle = isSmallScreen
    ? gridStyleNameSmallScreen
    : gridStyleLastName;

  const handleMouseEnter = () => {
    setHoveredItemIndex(0);
    setSubmitButtonStyle(submitButtonHover);
  };

  const handleMouseLeave = () => {
    setHoveredItemIndex(-1);
    setSubmitButtonStyle(submitButton);
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography style={titleForm}>
          <h2>{t("contactUs")}</h2>
        </Typography>
        <Grid container>
          <Grid xs={12} sm={6} item style={firstNameStyle}>
            <TextField
              label={t("firstname")}
              placeholder={t("enterFirstname")}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} sm={6} item style={lastNameStyle}>
            <TextField
              label={t("lastname")}
              placeholder={t("enterLastname")}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} item style={gridStyle}>
            <TextField
              label={t("emailField")}
              placeholder={t("enterEmail")}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} item style={gridStyle}>
            <TextField
              label={t("phoneNumber")}
              placeholder={t("enterPhone")}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} item style={gridStyle}>
            <TextField
              label={t("message")}
              placeholder={t("enterMessage")}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={submitButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {t("submit")}
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default withTranslation()(Contact);
