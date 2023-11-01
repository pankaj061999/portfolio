import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import dynamic from "next/dynamic";
import { aboutDetails, showInterast } from "@/utils/common";
import Image from "next/image";
import { BannerTitleSection } from "@/src/common/BannerTitle";

const AboutSection = () => {
  return (
    <Box component="section" id="about-section" sx={{ marginTop: "30px" }}>
      <Container>
        <Grid container spacing={0} justifyContent="space-between">
          <Grid item xs={12} md={6} lg={5}>
            <Box
              className="img-about img"
              sx={{
                background: `url('/images/Home/pankajpic.jpg')`,
                backgroundSize: "cover",
                height: "740px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                className="overlay"
                sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              ></Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={7} sx={{ pl: { md: 4, lg: 5 } }}>
            <Box>
              <Grid sx={{ display: "flex", flexDirection: "column" }}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    alignItems: "start",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ textTransform: "capitalize", fontSize: "2.5rem" }}
                  >
                    About Me
                  </Typography>
                  <Typography variant="body1">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </Typography>
                </Grid>
                {/* <BannerTitleSection
                  Title={""}
                  subTitle={"About Me"}
                  description={
                    " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                  }
                /> */}
                {aboutDetails?.length > 0 &&
                  aboutDetails.flat(1).map((item) => {
                    return (
                      <Grid
                        key={item?.id}
                        sx={{
                          alignItems: "start",
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <List>
                          <ListItem sx={{ gap: "10px" }}>
                            <Typography variant="subtitle1">
                              {item?.Title}:
                            </Typography>
                            <Typography variant="body2">{item.name}</Typography>
                          </ListItem>
                        </List>
                      </Grid>
                    );
                  })}
                {/* showinterast section */}
                <Box sx={{ display: "flex", gap: "63px", marginTop: "30px" }}>
                  {showInterast?.length > 0 &&
                    showInterast?.flat(1).map((item) => {
                      return (
                        <Box
                          key={item?.id}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: " 30px",
                              height: "30px",
                              borderRadius: "50%",
                              background: "#1e9c6d",
                            }}
                          >
                            <Image
                              src={item?.Imagepath}
                              width={20}
                              height={20}
                            />
                          </Box>
                          <Typography variant="body2">{item.name}</Typography>
                        </Box>
                      );
                    })}
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(AboutSection), { ssr: false });
