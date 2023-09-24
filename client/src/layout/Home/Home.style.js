const homeStyles = {
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
    paddingTop: "3%",
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
    fontSize: "1rem",
    textAlign: "justify",
    textJustify: "inter-word",
    fontWeight: "500",
    alignItems: "center",
    paddingTop: "2vh"
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
    fontSize: "0.9rem"
  },

  dataArrayItemHover: {
    height: "5vh",
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
    marginTop: "5vh",
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
    fontSize: "1rem",
    fontWeight: "550",
    textAlign: "justify",
    textJustify: "inter-word",
  },
};

export default homeStyles;
