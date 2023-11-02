const style = {
  aboutDetails: {
    "& p": {
      fontSize: "16px",
      fontWeight: "500",
      color: "#999999",
    },
    "& h5": {
      fontSize: "34px",
      textTransform: "capitalize",
      fontWeight: "600",
      marginBottom: "30px",
    },
    "& ul": {
      display: "flex",

      "& li": {
        padding: "0",
        fontWeight: "600",
        color: "#b1b493",
        "&:first-child": {
          width: "170px",
          fontWeight: "600",
          color: "#000000",
        },
      },
    },
  },
  listABout: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderLeft: "2px solid #b1b493",
    "& p": {
      fontWeight: "800",
      color: "#000",
    },
  },
};

export default style;
