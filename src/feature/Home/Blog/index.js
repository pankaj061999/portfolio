import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { blogData } from "@/utils/common";
import style from "../SkillSection/style";

const BlogSection = () => {
  return (
    <section style={{ marginTop: "100px" }} id="blog">
      <Container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={style.headingDetails}>
            <Typography variant="h5">Our Blog</Typography>
            <Typography variant="h2">Blog Content</Typography>
            <Typography variant="body1">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ marginTop: "30px" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              marginRight: "-15px",
              marginLeft: "-15px",
            }}
          >
            {blogData?.flat(1).map((item) => {
              return (
                <Box
                  sx={{
                    width: "100%",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    display: "flex",
                    flex: "0 0 33.33333%",
                    maxWidth: "33.33333%",
                  }}
                  key={item?.id}
                >
                  <Box sx={{ marginBottom: "30px" }}>
                    <Box
                      sx={{
                        overflow: "hidden",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        position: "relative",
                        display: "block",
                        width: "100%",
                        height: "300px",
                      }}
                      style={{
                        backgroundImage: `url(${item?.image})`,
                      }}
                    ></Box>
                    <Box sx={style.blogContent}>
                      <Box sx={style.BlogContentDetails}>
                        <Typography component="p">
                          <Typography
                            component="span"
                            sx={{ marginRight: "2rem" }}
                          >
                            {item?.date}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{ marginRight: "2rem" }}
                          >
                            {item?.author}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{ marginRight: "2rem" }}
                          >
                            {item?.comments}
                          </Typography>
                        </Typography>
                      </Box>
                      <Typography component="h3">{item?.title}</Typography>
                      <Typography component="p">{item?.content}</Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default BlogSection;
