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
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
} from "@mui/material";
import Calendar from "../../components/Calendar/Calendar";

const Reservation = () => {
  const { t } = useTranslation();
  const {
    amount,
    cardStyle,
    submitButton,
    submitButtonHover,
    reservationPrice,
    selectedNumber,
    totalValue,
    infoField,
    userCondtion,
    userConditionDiv,
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

  const [selectedNumberOfPersons, setSelectedNumberOfPersons] = useState(1);
  const [dateRange, setDateRange] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleDateRangeChange = (dates) => {
    if (dates && dates[0] && dates[1]) {
      setDateRange(dates);
      recalculateTotalAmount(selectedNumberOfPersons, dates);
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [moreInfo, setMoreInfo] = useState("");
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);


  const handleNumberOfPersonsChange = (event) => {
    const newNumberOfPersons = event.target.value;
    setSelectedNumberOfPersons(newNumberOfPersons);
    recalculateTotalAmount(newNumberOfPersons, dateRange);
  };

  const handleReservationSubmit = () => {
    e.preventDefault();

    const reservationData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      moreInfo: moreInfo,
      numberOfPersons: selectedNumberOfPersons,
      dateRange: dateRange,
    };

    ReservationService.createReservation(reservationData)
      .then((response) => {
        setMessage(response.message);
        setSuccessful(true);
      })
      .catch((error) => {
        setMessage(error.message || "An error occurred while processing your reservation.");
        setSuccessful(false);
      });
  };

  const itemArrays = [
    [
      { name: t("maxPersons") },
      { name: t("bathroomLinen") },
      { name: t("bedroomLinen") },
      { name: t("babyBed") },
      { name: t("oneBed") },
      { name: t("oneSofa") },
    ],
    [
      { name: t("fridge") },
      { name: t("coffeeMachine") },
      { name: t("kettle") },
      { name: t("microwave") },
      { name: t("wifi") },
      { name: t("barbecue") },
    ],
  ];

  const recalculateTotalAmount = (numberOfPersons, selectedDateRange) => {
    if (selectedDateRange && selectedDateRange[0] && selectedDateRange[1]) {
      const startDate = selectedDateRange[0];
      const endDate = selectedDateRange[1];
      const numberOfDays = endDate.diff(startDate, "days");

      let amount = 0;

      switch (numberOfPersons) {
        case 1:
          amount = numberOfDays * 60;
          break;
        case 2:
          amount = numberOfDays * 60;
          break;
        case 3:
          amount = numberOfDays * 75;
          break;
        case 4:
          amount = numberOfDays * 90;
          break;
        default:
          break;
      }

      setTotalAmount(amount);
    }
  };

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
    setSubmitButtonStyle(submitButton);
  };

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
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item style={lastNameStyle}>
                    <TextField
                      label={t("lastname")}
                      placeholder={t("enterLastname")}
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setLastName(e.target.value)}

                    />
                  </Grid>
                  <Grid xs={12} item style={gridStyle}>
                    <TextField
                      label={t("emailField")}
                      placeholder={t("enterEmail")}
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setEmail(e.target.value)}

                    />
                  </Grid>
                  <Grid xs={12} item style={gridStyle}>
                    <TextField
                      label={t("phoneNumber")}
                      placeholder={t("enterPhone")}
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={12} item style={gridStyle}>
                    <TextField
                      label={t("moreInfo")}
                      placeholder={t("enterInfo")}
                      variant="outlined"
                      fullWidth
                      onChange={(e) => setMoreInfo(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
            <div style={halfTopStyle}>
              <div style={stayDurationStyle}>
                <p style={durationStyle}>{t("stayDuration")}</p>
                <Calendar onDateRangeChange={handleDateRangeChange} />
              </div>
              <div style={reservationPrice}>
                <p>{t("numberOfPeople")}</p>
                <Select
                  value={selectedNumberOfPersons}
                  onChange={handleNumberOfPersonsChange}
                  variant="outlined"
                  required
                  style= {selectedNumber}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </div>
                <div style={totalValue}>
                  <p>{t("totalAmount")} </p>
                  {totalAmount > 0 && (
                    <p style={amount}> {totalAmount} €</p>
                  )}
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
                  { /* <FormControlLabel
                      value="paypal"
                      control={<Radio />}
                      label={t("paypal")}
                    />
                    <FormControlLabel
                      value="onPlace"
                      control={<Radio />}
                      label={t("onPlace")}
                    /> */}
                    <p>{t("onlyOnSite")}</p>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>        
          </div>
            <div style={userCondtion}>
                  <div style={userConditionDiv}>
                    <p>{t("deposit")}</p>
                    <p>{t("noAnimal")}</p>
                    <p>{t("cancelReservation")}</p>
                  </div>
                  <div style={userConditionDiv}>
                    <p>{t("arrived")}</p>
                    <p>{t("departure")}</p>
                    <p>{t("breakfast")}</p>
                  </div>
                </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={submitButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleReservationSubmit}
          >
            {t("paid")}
          </Button>
          {message && (
            <Alert severity={successful ? "success" : "error"} style={{ marginTop: "20px" }}>
              {message}
            </Alert>
          )}
        </CardContent>
      </Card>
      <div style={dataArrayStyle}>
        {itemArrays.map((itemArray, arrayIndex) => (
          <div style={dataArrayLineStyle} key={arrayIndex}>
            {itemArray.map((item, index) => (
              <div
                style={
                  index === (arrayIndex === 0 ? hoveredItemIndex1 : hoveredItemIndex2)
                    ? dataArrayItemHover
                    : dataArrayItem
                }
                onMouseEnter={() =>
                  arrayIndex === 0 ? handleMouseEnter1(index) : handleMouseEnter2(index)
                }
                onMouseLeave={handleMouseLeave}
                key={item.name}
              >
                {item.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default withTranslation()(Reservation);
