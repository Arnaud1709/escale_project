const airstripDataStyles = {
  rootStyle: {
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
    paddingTop: "3%",
    display: "flex",
    alignItems: "center",

  },

  picturesBody: {
    width: "100%",
    flex: "1",
    textAlign: "center",
  },

  homePictures: {
    width: "80%",
    borderRadius: "30px",
    color: "blue",
  },

  description: {
    flex: "1",
    margin: "auto",
    fontSize: "20px",
    textAlign: "justify",
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

  dataArraySmallScreen: {
    marginTop: "20px",
    marginBottom: "10px",
    width: "80vw",
    display: "flex",
    flexDirection: "row",
  },

  linkStyle: {
    textDecoration: "none",
    color: "black"
  },

  dataArrayLineSmallScreen: {
    height: "10vh",
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
    color: "blue",
  },
  picturesBodySmallScreen: {
    width: "100%",
    flex: "1",
  },
  descriptionSmallScreen: {
    flex: "1",
    margin: "auto",
    fontSize: "16px",
    textAlign: "justify",
    textJustify: "inter-word",
  },
};

export default airstripDataStyles;
