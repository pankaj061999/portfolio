import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import style from "./style";

const FooterComponent = () => {
  return (
    <>
      <Box sx={style.newLatter}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={style.footerDetails}>
                <Box
                  style={{
                    display: "flex",
                  }}
                >
                  <MenuBookIcon style={{ width: "50px", color: "#fff" }} />
                  <Typography
                    component="h1"
                    style={{ fontSize: "18px", color: "#fff" }}
                  >
                    Sahitya
                  </Typography>
                </Box>
                <Typography variant="body1">
                  Sahitya: Your go-to blogging website for sharing ideas,
                  <br />
                  stories, and experiences with a vibrant community of writers
                  and readers. Unleash your creativity and connect with
                  like-minded individuals at Sahitya.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={style.footerList}>
                <Typography variant="h4">Important Links</Typography>
                <ul>
                  <li>About</li>
                  <li>Terms</li>
                  <li>Privacy Policy</li>
                  <li>Careers</li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={style.footerList2}>
                <Typography variant="h4">Follow us at</Typography>
                <ul>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/pankaj-kumar-meena-1b3922176/"
                      target="_blank"
                      className="me-4 text-reset"
                      style={{ color: "#fff !important" }}
                    >
                      <LinkedInIcon />
                    </Link>
                    Linkedin
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/pankaj-kumar-meena-1b3922176/"
                      target="_blank"
                      className="me-4 text-reset"
                      style={{ color: "#fff !important" }}
                    >
                      <FacebookIcon />
                    </Link>
                    Facebook
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/pankajk66711680"
                      target="_blank"
                      className="me-4 text-reset"
                      style={{ color: "#fff !important" }}
                    >
                      {" "}
                      <TwitterIcon />
                    </Link>
                    Twitter
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/pankaj-kumar-meena-1b3922176/"
                      target="_blank"
                      className="me-4 text-reset"
                      style={{ color: "#fff !important" }}
                    >
                      <InstagramIcon />
                    </Link>
                    Instagram
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
          <Box sx={style.copyRight}>
            <span>
              <img src="/images/home/Heart.svg" alt="" />
            </span>
            <Typography>Copyright © 2023. Crafted with love.</Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FooterComponent;
