const ReservationStyles = {
  containerStyle: {
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
  },

  containerStyleSmallScreen: {
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
    height: "100vh"
  },

  cardStyle: {
    fontFamily: "Quicksand",
    maxWidth: "100vw",
    padding: "20px 5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "15px",
    marginTop:"3%"
  },

  fadeIn: {
    animationName: "fadeIn",
    animationDuration: "1s",
    animationFillMode: "forwards",
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

  halfTopDiv: {
    width: "48%",
    height: "100%",
  },

  picturesBody: {
    width: "100%",
    flex: "1",
    textAlign: "center",
  },

  homePictures: {
    width: "80%",
    borderRadius: "30px",
  },

  description: {
    flex: "1",
    margin: "auto",
    fontSize: "1.2vw",
    textAlign: "justify",
    textJustify: "inter-word",
    fontWeight: "500",
    alignItems: "center",
  },

  infoField: {
    marginTop:"10px"
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
    height: "50px",
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
  },

  dataArrayItemHover: {
    height: "50px",
    width: "170px",
    textAlign: "center",
    fontWeight: "600",
    backgroundColor: "#cbe3f9",
    color: "white",
    borderRadius: "30px",
    margin: "5px",
    cursor: "default",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  durationStyle: {
    display: "flex",
    marginRight: "10px",
    alignItems: "center"
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
    margin: "10px"
  },

  submitButton: {
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
  },

  submitButtonHover: {
    height: "50px",
    textAlign: "center",
    fontWeight: "600",
    backgroundColor: "#cbe3f9",
    color: "white",
    borderRadius: "15px",
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 2px 1px -1px grey",
  },
};
export default ReservationStyles;
