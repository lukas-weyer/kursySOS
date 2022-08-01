import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Container
} from "@mui/material";
import Grid from "@mui/material/Grid";
import HeroForm from "./HeroForm";

import { motion } from "framer-motion";

export default function HeroContainer() {
  return (
    <Box component="section">
      <Container>
        <Grid container justifyContent="center" sx={{ padding: "64px 16px" }}>
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            sx={{ padding: "32px 16px" }}
            xs={12}
            md={6}
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Grid item>
              <Typography variant="h2" component="h1">
                Darmowy kurs Pierwszej Pomocy Online
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" component="p">
                Naucz się Pierwszej Pomocy
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{ padding: "32px 16px" }}
            xs={12}
            md={6}
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.09 }}
            viewport={{ once: true }}
          >
            <HeroForm />
          </Grid>
        </Grid>
      </Container>
      <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        style={{ width: "100%", marginBottom: "-8px" }}
      >
        <path
          fill="rgb(247, 250, 255)"
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </svg>
    </Box>
  );
}
