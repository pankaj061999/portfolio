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
import style from "./style";

const AboutSection = () => {
  return (
    <Box component="section" id="about-section">
      <Container>
        <Grid
          container
          spacing={0}
          justifyContent="space-between"
          alignItems="center"
        >
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
                  <Box sx={style.aboutDetails}>
                    <Typography
                      variant="body1"
                      style={{ color: "#b1b493", fontWeight: "600" }}
                    >
                      MY INTRO
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ textTransform: "capitalize", fontSize: "2.5rem" }}
                    >
                      About Me
                    </Typography>
                    <Typography variant="body1">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country, in which roasted parts of sentences
                      fly into your mouth.
                    </Typography>
                    {aboutDetails?.length > 0 &&
                      aboutDetails.flat(1).map((item) => {
                        return (
                          <List>
                            <ListItem>{item?.Title}</ListItem>
                            <ListItem>{item.name}</ListItem>
                          </List>
                        );
                      })}
                  </Box>
                </Grid>

                {/* showinterast section */}
                <Box sx={{ display: "flex", gap: "63px", marginTop: "30px" }}>
                  {showInterast?.length > 0 &&
                    showInterast?.flat(1).map((item) => {
                      return (
                        <Box sx={style.listABout} key={item?.id}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: " 30px",
                              height: "30px",
                              borderRadius: "50%",
                              background: "#1e9c6d",
                              marginLeft: "10px",
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
