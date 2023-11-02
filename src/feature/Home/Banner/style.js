const style = {
  sliderList: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "750px",
    position: "relative",
  },

  oneThirdLast: {
    width: "70%",
    position: "relative",
    height: "760px",
    zIndex: "-1",
    "-mozBoxShadow": "20px -20px 69px -27px rgba(0, 0, 0, 0.16)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: " center center",
    marginLeft: "auto",
  },
  overlayBanner: {
    top: "0",
    transform: "skewX(20deg)",
    position: "absolute",
    left: "-7%",
    background: "#fff",
    width: "150px",
    height: "50%",
    opacity: "1",
    borderRight: "10px solid rgba(0, 0, 0, 0.1)",
  },
  overlayBannerBottom: {
    transform: "skewX(20deg)",
    position: "absolute",
    left: "-7%",
    background: "#fff",
    width: "150px",
    height: "50%",
    opacity: "1",
    borderRight: "10px solid rgba(0, 0, 0, 0.1)",
    transform: "skewX(-20deg)",
    bottom: "0",
  },
  BannerHeading: {
    position: "absolute",
    top: "50%",
    left: "25px",
    transform: "translateY(-50%)",
    width: "50%",
    "& h1": {
      fontSize: "55px",
      fontWeight: "800",
      margin: "30px 0",
      "& span": { color: "#b1b493", fontWeight: "800" },
    },
    "& p": {
      fontWeight: "600",
      fontSize: "14px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: "#b1b493",
    },
  },
  outlineBtn: {
    border: "1px solid #b1b493",
    color: "#b1b493",
    marginRight: "5px",
    padding: "5px 12px",
    fontSize: "13px",
    fontWeight: "600",

    "&:hover": {
      background: "#b1b493",
      color: "#fff",
    },
  },
};

export default style;
