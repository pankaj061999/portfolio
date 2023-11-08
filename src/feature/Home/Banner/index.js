import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "animate.css";
import style from "./style";
export const BannerComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box id="home">
      <div></div>
      <Slider {...settings}>
        <Box sx={style.sliderList}>
          <Box
            sx={style.oneThirdLast}
            style={{ backgroundImage: "url(/images/Home/pankajpic.jpg)" }}
          >
            <Box sx={style.overlayBanner}></Box>
            <Box sx={style.overlayBannerBottom}></Box>
          </Box>

          <Box sx={style.BannerHeading}>
            <Typography variant="body1">Hello! This is Clyde</Typography>
            <Typography variant="h1">
              Creative <span>Full Stack Developer</span>
              <br /> MERN &amp; Developer
            </Typography>
            <Button
              sx={style.outlineBtn}
              style={{ background: "#b1b493", color: "#fff" }}
            >
              Hire me
            </Button>
            <Button
              href="/Pankaj_resume.pdf"
              target="_blank"
              download
              sx={style.outlineBtn}
            >
              Download CV
            </Button>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};
