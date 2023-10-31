const style = {
  newLatter: {
    background: "#0D2436",
    padding: "50px 0",
    borderBottom: "1px solid #fff",
    "&:last-child": {
      borderBottom: "none",
    },
  },
  newLatterSection: {
    "& h6": {
      fontSize: "35px",
      color: "#fff",
      lineHeight: "35px",
    },
    "& p": {
      color: "#5A7184",
      fontSize: "16px",
    },
    "& form": {
      display: "flex",
      gap: "10px",
      margin: "30px 0",
      "& input": {
        width: "100%",
        background: "#fff",
        borderRadius: "8px",
        border: "none",
        padding: "15px",
        height: "45px",
        fontSize: "15px",
        color: "#5A7184",
      },
      "& button": {
        background: "#1565D8",
        padding: "10px",
        borderRadius: "8px",
        width: "185px",
        fontSize: "15px",
        color: "#fff",
        textTransform: "unset",

        "&:hover": {
          background: "#1565D8",
        },
      },
    },
  },
  bestWeek: {
    width: "450px",
    position: "relative",
    marginLeft: "auto",
  },
  bestWeekBox: {
    position: "relative",
    zIndex: "2",
    borderRadius: "16px",
    overflow: "hidden",
    background: "#fff",
    padding: "2px",
    "& img": {
      width: "100%",
    },
  },
  bestWeekDetails: {
    padding: "20px",
    "& h5": {
      fontSize: "24px",
      color: "#183B56",
    },
    "& p": {
      color: "#5A7184",
      fontSize: "15px",
    },
  },

  rightBg: {
    position: "absolute",
    right: "-50px",
    top: "50px",
  },
  leftBg: {
    position: "absolute",
    left: "-50px",
    bottom: "50px",
  },
  footerDetails: {
    "& p": {
      color: "#5A7184",
      fontSize: "16px",
      marginTop: "20px",
    },
  },
  footerList: {
    "& h4": {
      color: "#5A7184",
      fontSize: "18px",
      marginBottom: "10px",
    },
    "& ul": {
      padding: "0",
      margin: "0",
      "& li": {
        listStyle: "none",
        color: "#5A7184",
        fontSize: "16px",
        padding: "6px 0",
      },
    },
  },

  copyRight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginTop: "30px",
    "& p": {
      color: "#2d5473",
      fontSize: "14px",
    },
  },
  footerList2: {
    "& h4": {
      color: "#5A7184",
      fontSize: "18px",
      marginBottom: "10px",
    },
    "& ul": {
      padding: "0",
      margin: "20px 0px",
      "& li": {
        listStyle: "none",
        color: "#5A7184",
        fontSize: "16px",
        marginBottom: "12px",
        background: "#0c2131",
        borderRadius: "2px",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "146px",
      },
    },
  },
};

export default style;
