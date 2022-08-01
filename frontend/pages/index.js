import Head from "next/head";
import { GET_ALL_USERS_QUERY } from "../queries/usersQuery";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import HeroSection from "../components/HeroSection";
import { Toolbar, Box, Divider } from "@mui/material";
import RecommendationsSection from "../components/RecommendationsSection";
import CourseDescriptionSection from "../components/CourseDescriptionSection";
import PageTransition from "../components/PageTransition";

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
        <CourseDescriptionSection />
      </PageTransition>
    </>
  );
}
