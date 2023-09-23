import React, { useState } from "react";
import ReservationStyles from "./Reservation.style";
import { withTranslation, useTranslation } from "react-i18next";
import {
  Button,
  Card,
  CardContent,
  useMediaQuery,
  Grid,
  TextField,
  Typography,
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import Calendar from "../../components/Calendar/Calendar";

const Reservation = ({ currentLanguage }) => {
  const { t, i18n } = useTranslation();
  const {
    cardStyle,
    submitButton,
    submitButtonHover,
    infoField,
    gridStyle,
    durationStyle,
    stayDurationStyle,
    gridStyleFirstName,
    gridStyleLastName,
    gridStyleNameSmallScreen,
    containerStyle,
    description,
    descriptionSmallScreen,
    dataArray,
    dataArraySmallScreen,
    dataArrayItemHover,
    dataArrayLine,
    dataArrayLineSmallScreen,
    dataArrayItem,
    halfTopDiv,
    halfTopDivSmallScreen,
    topDiv,
    topDivSmallScreen,
  } = ReservationStyles;
  const [hoveredItemIndex1, setHoveredItemIndex1] = useState(-1);
  const [hoveredItemIndex2, setHoveredItemIndex2] = useState(-1);
  const [submitButtonStyle, setSubmitButtonStyle] = useState(submitButton);

  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const firstNameStyle = isSmallScreen
    ? gridStyleNameSmallScreen
    : gridStyleFirstName;
  const lastNameStyle = isSmallScreen
    ? gridStyleNameSmallScreen
    : gridStyleLastName;
  const halfTopStyle = isSmallScreen ? halfTopDivSmallScreen : halfTopDiv;
  const topDivStyle = isSmallScreen ? topDivSmallScreen : topDiv;
  const descriptionStyle = isSmallScreen ? descriptionSmallScreen : description;
  const dataArrayStyle = isSmallScreen ? dataArraySmallScreen : dataArray;
  const dataArrayLineStyle = isSmallScreen
    ? dataArrayLineSmallScreen
    : dataArrayLine;

  const handleMouseEnter = () => {
    setSubmitButtonStyle(submitButtonHover);
  };

  const handleMouseEnter1 = (index) => {
    setHoveredItemIndex1(index);
  };

  const handleMouseEnter2 = (index) => {
    setHoveredItemIndex2(index);
  };

  const handleMouseLeave = () => {
    setHoveredItemIndex1(-1);
    setHoveredItemIndex2(-1);
    setSubmitButtonStyle(submitButton)
  };

  const itemArray = [
    { name: t("noAnimal") },
    { name: t("maxPersons") },
    { name: t("bathroomLinen") },
    { name: t("bedroomLinen") },
    { name: t("babyBed") },
    { name: t("twoBed") },
  ];
  const itemArray2 = [
    { name: t("fridge") },
    { name: t("cofeeMachine") },
    { name: t("kettle") },
    { name: t("microwave") },
    { name: t("wifi") },
    { name: t("barbecue") },
  ];

  return (
    <Container style={containerStyle}>
      <Card style={cardStyle}>
        <CardContent>
          <div style={topDivStyle}>
            <div style={halfTopStyle}>
              <div style={descriptionStyle}>
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
                </Grid>
              </div>
            </div>
            <div style={halfTopStyle}>
              <div style={stayDurationStyle}>
                <p style={durationStyle}>{t("stayDuration")}</p>
                <Calendar/>
              </div>
              <div>
                <TextField
                style= {gridStyle}
                  label={t("numberPerson")}
                  placeholder={t("enterMessage")}
                  variant="outlined"
                  fullWidth
                  required
                />
              </div>
              <div>
                <FormControl style={infoField}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    {t("paidWith")}
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    required
                  >
                    <FormControlLabel
                      value="paypal"
                      control={<Radio />}
                      label={t("paypal")}
                    />
                    <FormControlLabel
                      value="onPlace"
                      control={<Radio />}
                      label={t("onPlace")}
                    />
                  </RadioGroup>
                </FormControl>
              </div>

            </div>
          </div>
          <div>
                <TextField
                style={infoField}
                  label={t("moreInfo")}
                  placeholder={t("enterMessage")}
                  variant="outlined"
                  fullWidth
                />
              </div>
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
        </CardContent>
      </Card>
      <div style={dataArrayStyle}>
        <div style={dataArrayLineStyle}>
          {itemArray.map((item, index) => (
            <div
              style={
                index === hoveredItemIndex1 ? dataArrayItemHover : dataArrayItem
              }
              onMouseEnter={() => handleMouseEnter1(index)}
              onMouseLeave={handleMouseLeave}
              key={item.name}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div style={dataArrayLineStyle}>
          {itemArray2.map((item, index) => (
            <div
              style={
                index === hoveredItemIndex2 ? dataArrayItemHover : dataArrayItem
              }
              onMouseEnter={() => handleMouseEnter2(index)}
              onMouseLeave={handleMouseLeave}
              key={item.name}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default withTranslation()(Reservation);
