import { Box } from "@mui/system";
import FooterComponent from "../../Footer";
import HeaderComponent from "../../Header";
import style from "../style";

const DefaultLayout = ({ children, customStyles = {} }) => {
  return (
    <Box sx={{ ...style.wrapper, ...customStyles.wrapper }}>
      <HeaderComponent />
      <Box sx={{ minHeight: "100vh", marginBottom: "20px" }}>{children}</Box>
      <FooterComponent />
    </Box>
  );
};

export default DefaultLayout;
