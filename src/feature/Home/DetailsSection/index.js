import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import dynamic from "next/dynamic";
import Image from "next/image";
import { detailsObj } from "@/utils/common";
import style from "./style";

const CounterBox = styled(Box)`
  text-align: center;
  padding: 30px 15px;
`;

const DetailsSection = () => {
  return (
    <Box component="section" id="section-counter" sx={style.detailsSection}>
      <Container>
        <Grid container spacing={2}>
          {detailsObj?.length > 0 &&
            detailsObj.flat(1).map((item) => {
              return (
                <Grid xs={12} md={3} key={item?.id}>
                  <CounterBox
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Box
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        background: "#3ddea0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image src={item?.Imagepath} height={40} width={40} />
                    </Box>
                    <Box sx={style.detailsHeading}>
                      <Typography variant="h4"> {item?.number} </Typography>
                      <Typography variant="h6" sx={{ fontSize: "20px" }}>
                        {item?.name}
                      </Typography>
                    </Box>
                  </CounterBox>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(DetailsSection), { ssr: false });
