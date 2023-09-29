const footerStyles = {
  root: {
    fontFamily: "Quicksand, sans-serif",
    backgroundColor: "#79b7f0",
    color: "white",
    maxWidth: "none",
    position: "absolute",
    bottom: "0",
    width: "100%",
    marginTop: "1vh"
  },

  rootSmallScreen: {
    fontFamily: "Quicksand, sans-serif",
    backgroundColor: "#79b7f0",
    color: "white",
    maxWidth: "none",
    width: "100%",
  },

  footerHeader: {
    lineHeight: "1.5", 
  },

  footerSection: {
    display: "flex",
    flexDirection: "column",
  },

  footerLinks: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    textAlign: "left",
    marginBottom: "1rem",
  },

  footerLinksDiv: {
    width: "180px",
    margin: "1rem",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    color: "white",
  },

  linkStyle: {
    color: "white",
    textDecoration: "none",
  },

  linkStyleBelow: {
    color: "white",
    textDecoration: "none",
  },

  titleFooter: {
    fontSize: "0.875rem", 
    lineHeight: "1.25",
    margin: "0.5rem 0",
    cursor: "pointer",
  },

  footerBelow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "0.2rem",
  },

  footerBelowLinks: {
    fontSize: "1rem",       
    lineHeight: "1.125",    
    marginLeft: "1rem",
    color: "white",
    fontWeight: "600",
  },

  footerCopyright: {
    fontSize: "1rem",    
    lineHeight: "1.125", 
    color: "white",
    fontWeight: "600",
  },
};

export default footerStyles;
