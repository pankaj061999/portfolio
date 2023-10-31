import React from "react";
import { StrictMode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import "../styles/globals.css";
import Layout from "@/src/feature/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <Head>{/* Move other head-related components or metadata here */}</Head>
      <CssBaseline />
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </StrictMode>
  );
}

export default MyApp;
