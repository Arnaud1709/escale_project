const baseContainerStyle = {
  fontFamily: "Quicksand",
  margin: "0",
  paddingLeft: "8vw",
  paddingRight: "8vw",
  maxWidth: "none",
  maxHeight: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "black",
};

const baseArrayItem = {
  height: "5vh",
  width: "170px",
  textAlign: "center",
  fontWeight: "600",
  backgroundColor: "#79b7f0",
  color: "white",
  borderRadius: "30px",
  margin: "5px",
  cursor: "default",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 2px 1px -1px grey",
  fontSize: "0.9rem",
};

const baseButton = {
  height: "50px",
  textAlign: "center",
  fontWeight: "600",
  backgroundColor: "#79b7f0",
  color: "white",
  borderRadius: "15px",
  marginTop: "10px",
  cursor: "default",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 2px 1px -1px grey",
  fontSize: "0.9rem",
};

const baseSmallScreenStyles = {
  height: "100vh",
};

const ReservationStyles = {
  containerStyle: {
    ...baseContainerStyle,
  },

  containerStyleSmallScreen: {
    ...baseContainerStyle,
    ...baseSmallScreenStyles,
  },

  cardStyle: {
    fontFamily: "Quicksand",
    maxWidth: "100vw",
    padding: "20px 5px 0px 5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "15px",
    marginTop: "3%",
  },

  topDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "80%",
  },

  botDiv: {
    height: "20%",
  },

  amount: {
    marginLeft: "5px"
  },

  halfTopDiv: {
    width: "48%",
    height: "100%",
  },

  picturesBody: {
    width: "100%",
    flex: "1",
    textAlign: "center",
  },

  description: {
    flex: "1",
    margin: "auto",
    fontSize: "0.8rem",
    textAlign: "justify",
    textJustify: "inter-word",
    fontWeight: "500",
    alignItems: "center",
  },

  reservationPrice: {
    display: "flex",
    flexDirection: "row",
  },

  selectedNumber:{
    width: "100px",
    marginLeft: "10px"
  },

  totalValue:{
    display: "flex",
    flexDirection: "row",
    margin: "10px 0px"
  },

  userCondtion: {
    display: "flex",
    justificontent: "row",

  },

  userConditionDiv: {
    width: "50%",
    margin: "0px 10px",
    fontWeight: "600",
    fontSize: "0.8rem"
  },

  dataArray: {
    height: "14vh",
    width: "100vw",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    marginTop: "1%",
  },

  dataArrayLine: {
    height: "6vh",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: "auto",
  },

  dataArrayItem: {
    ...baseArrayItem
  },

  dataArrayItemHover: {
    ...baseArrayItem,
    backgroundColor: "#cbe3f9",
  },

  durationStyle: {
    display: "flex",
    marginRight: "10px",
    alignItems: "center",
  },

  dataArraySmallScreen: {
    marginTop: "20px",
    marginBottom: "10px",
    width: "100vw",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  dataArrayLineSmallScreen: {
    height: "20vh",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    margin: "auto",
  },

  topDivSmallScreen: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "column",
  },

  halfTopDivSmallScreen: {
    width: "auto",
    height: "auto",
  },

  homePicturesSmallScreen: {
    width: "90%",
    borderRadius: "20px",
  },

  picturesBodySmallScreen: {
    width: "100%",
    marginRight: "5%",
    marginLeft: "5%",
    flex: "1",
  },

  descriptionSmallScreen: {
    flex: "1",
    margin: "auto",
    fontSize: "12px",
    fontWeight: "550",
    textAlign: "justify",
    textJustify: "inter-word",
  },

  gridStyle: {
    marginTop: "10px",
  },

  gridStyleFirstName: {
    marginTop: "10px",
    paddingRight: "5px",
  },

  gridStyleLastName: {
    marginTop: "10px",
    paddingLeft: "5px",
  },

  gridStyleNameSmallScreen: {
    marginTop: "10px",
  },

  stayDurationStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "10px 0px",
  },

  submitButton: {
    ...baseButton
  },

  submitButtonHover: {
    ...baseButton,
    backgroundColor: "#cbe3f9",
  },
};

export default ReservationStyles;
