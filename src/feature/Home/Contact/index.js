import React from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { LocationOn, Phone, MailOutline, Language } from "@mui/icons-material";
import dynamic from "next/dynamic";
import style from "./style";
import PlaceIcon from "@mui/icons-material/Place";
import { contactInfo } from "@/utils/common";

const ContactSection = () => {
  return (
    <section id="contact" style={{ marginTop: "100px" }}>
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
          <Box sx={style.contactTitle}>
            <Typography variant="h5">CONTACT US</Typography>
            <Typography variant="h2">Have a Project?</Typography>
            <Typography variant="body1">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </Typography>
          </Box>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {" "}
            {/* Set the width of the form */}
            <form action="#" className="bg-light p-4 p-md-5 contact-form">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Your Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Your Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Subject" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={7}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button variant="contained" sx={style.sendMessageBtnCSS}>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="row">
              {contactInfo?.length > 0 &&
                contactInfo?.flat(1).map((item, index) => {
                  return (
                    <ContactInfo
                      icon={
                        item?.iconName === "LocationOn" ? (
                          <LocationOn />
                        ) : item?.iconName == "Phone" ? (
                          <Phone />
                        ) : item?.iconName == "MailOutline" ? (
                          <MailOutline />
                        ) : (
                          <Language />
                        )
                      }
                      title={item.title}
                      text={item.text}
                    />
                  );
                })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

const ContactInfo = ({ icon, text, title }) => {
  return (
    <Grid container alignItems="center" style={{ gap: "25px" }}>
      <Grid item sx={style.iconCSS}>
        {icon}
      </Grid>
      <Grid item>
        <Typography variant="body1" style={{ fontSize: "16px", color: "#000" }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          style={{ fontSize: "16px", color: "#b1b493" }}
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default dynamic(() => Promise.resolve(ContactSection), { ssr: false });
