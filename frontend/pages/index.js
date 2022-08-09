import Head from "next/head";

import Container from "@mui/material/Container";
import HeroSection from "../components/HeroSection";
import Divider from "@mui/material/Divider";
import RecommendationsSection from "../components/RecommendationsSection";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kursy SOS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTransition>
        <HeroSection />
        <RecommendationsSection />
        <Container sx={{ backgroundColor: "rgb(247, 250, 255)" }}>
          <Divider />
        </Container>
      </PageTransition>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
