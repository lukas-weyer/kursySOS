import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ClientOpinion from "./ClientOpinion";
import Image from "next/image";

import { motion } from "framer-motion";

import airbnb from "../public/airbnb-original.svg";
import amazon from "../public/amazon-original.svg";
import fitbit from "../public/fitbit-original.svg";

export default function RecommendationsSection() {
  return (
    <Box component="section" sx={{ backgroundColor: "rgb(247, 250, 255)" }}>
      <Container>
        <Grid container justifyContent="center" sx={{ padding: "64px 16px" }}>
          <Grid
            item
            container
            direction="column"
            xs={12}
            md={6}
            sx={{ padding: "32px 16px" }}
            justifyContent="space-around"
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 30 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Grid item>
              <Typography variant="h4" component="h5" gutterBottom>
                Z naszych kursów korzystają firmy z całej Polski.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Dołącz do naszych zadowolonych klientów!
              </Typography>
            </Grid>
            <Grid item container wrap="nowrap" columnSpacing={2}>
              <Grid item>
                <Image src={airbnb} alt="airbnb" width={100} />
              </Grid>
              <Grid item>
                <Image src={amazon} alt="airbnb" width={100} />
              </Grid>
              <Grid item>
                <Image src={fitbit} alt="airbnb" width={100} />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ padding: "32px 16px" }}
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 30 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ClientOpinion />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
