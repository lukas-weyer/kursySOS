import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CourseDescriptionCard from "./CourseDescriptionCard";

import { motion } from "framer-motion";

import wezwanieZRM from "../public/wezwanieZRM.png";
import nieprzytomny from "../public/nieprzytomny.png";
import resuscytacja from "../public/resuscytacja.png";

const lessons1 = [
  { id: 1, subject: "Lekcja 1: Wezwanie Zespołu Ratownictwa Medycznego." },
  { id: 2, subject: "Lekcja 2: Aspekty prawne w pierwszej pomocy." }
];

const lessons2 = [
  {
    id: 1,
    subject: "Lekcja 1: Postępowanie z nieprzytomnym, pozycja bezpieczna."
  },
  { id: 2, subject: "Lekcja 2: Komfort termiczny u nieprzytomnych." }
];

const lessons3 = [
  {
    id: 1,
    subject: "Lekcja 1: Resuscytacja osoby dorosłej."
  },
  {
    id: 2,
    subject:
      "Lekcja 2: Resuscytacja osoby dorosłej z użyciem AED - defibrylatora."
  },
  {
    id: 3,
    subject: "Lekcja 3: Resuscytacja niemowlaka."
  },
  {
    id: 4,
    subject:
      "Lekcja 4: Resuscytacja dziecka (dziecko powyżej pierwszego roku życia)."
  }
];

export default function CourseDescriptionSection({ course }) {
  const { chapters } = course;
  console.log("chapters", chapters);
  return (
    <Box component="section" sx={{ backgroundColor: "rgb(247, 250, 255)" }}>
      <Container sx={{ padding: "64px 16px" }}>
        <Grid container direction="column">
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            mb={4}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 30 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography variant="h3" component="h3" align="center" mb={4}>
              Czego nauczysz się podczas kursu
            </Typography>
            {course?.subtitle && (
              <Typography
                variant="h6"
                component="h6"
                align="center"
                sx={{
                  maxWidth: "640px",
                  color: "rgb(100, 110, 115)"
                }}
              >
                {course.subtitle}
              </Typography>
            )}
          </Grid>
          <Grid item container direction="column">
            {chapters?.map((chapter) => (
              <CourseDescriptionCard
                key={chapter.id}
                title={chapter.name}
                lessons={chapter.lessons}
                mirror={chapter.mirror}
                description={chapter.description}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
