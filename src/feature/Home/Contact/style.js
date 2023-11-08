const style = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  contactTitle: {
    marginBottom: "60px",
    textAlign: "center",
    "& h2": {
      fontSize: "40px",
      fontWeight: "600",
      color: "#000",
      marginBottom: "1.5rem",
    },
    "& h5": {
      fontSize: "16px",
      fontWeight: "600",
      color: "#b1b493",
      textTransform: "uppercase",
      marginBottom: "5px",
    },
    "& p": {
      fontSize: "18px",
      fontWeight: "500",
      color: "#999999",
    },
  },

  sendMessageBtnCSS: {
    background: "#b1b493",
    maxWidth: "41%",
    height: "50px",
  },

  iconCSS: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#b1b493",
    // margin: "0 auto",
    marginBottom: "20px",
    "& svg": {
      marginTop: "10px",
      marginLeft: "10px",
    },
  },
};

export default style;
