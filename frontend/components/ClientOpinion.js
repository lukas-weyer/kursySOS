import Slider from "react-slick";
import CardContent from "@mui/material/CardContent";
import { Avatar, Box, Card, Rating, Typography, Grid } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import fb_opinia from "../public/fb_opinia.jpeg";

export default function ClientOpinion() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 9000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <Box sx={{ padding: "16px" }}>
        <Card variant="outlined">
          <CardContent>
            <Rating value={5} readOnly sx={{ marginBottom: "8px" }} />
            <Typography sx={{ marginBottom: "16px" }}>
              Dzięki filmikom zamieszczanym przez Pana Adriana na YouTube
              wiedziałem jak udzielić pomocy mężczyźnie u którego doszło do
              zatrzymania krążenia. Polecam każdemu taki kurs bo ta wiedza może
              się przydać w każdym momencie 🙂
            </Typography>
            <Grid container>
              <Grid item>
                <Avatar>
                  <Image
                    src={fb_opinia}
                    alt="zdjęcie autora opinii"
                    width={40}
                    height={40}
                  />
                </Avatar>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "8px"
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "400" }}
                >
                  Paweł Lisicki
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ padding: "16px" }}>
        <Card variant="outlined">
          <CardContent>
            <Rating value={5} readOnly sx={{ marginBottom: "8px" }} />
            <Typography sx={{ marginBottom: "16px" }}>
              Dzięki filmikom zamieszczanym przez Pana Adriana na YouTube
              wiedziałem jak udzielić pomocy mężczyźnie u którego doszło do
              zatrzymania krążenia. Polecam każdemu taki kurs bo ta wiedza może
              się przydać w każdym momencie 🙂
            </Typography>
            <Grid container>
              <Grid item>
                <Avatar>
                  <Image
                    src={fb_opinia}
                    alt="zdjęcie autora opinii"
                    width={40}
                    height={40}
                  />
                </Avatar>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "8px"
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "400" }}
                >
                  Paweł Lisicki
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ padding: "16px" }}>
        <Card variant="outlined">
          <CardContent>
            <Rating value={5} readOnly sx={{ marginBottom: "8px" }} />
            <Typography sx={{ marginBottom: "16px" }}>
              Dzięki filmikom zamieszczanym przez Pana Adriana na YouTube
              wiedziałem jak udzielić pomocy mężczyźnie u którego doszło do
              zatrzymania krążenia. Polecam każdemu taki kurs bo ta wiedza może
              się przydać w każdym momencie 🙂
            </Typography>
            <Grid container>
              <Grid item>
                <Avatar>
                  <Image
                    src={fb_opinia}
                    alt="zdjęcie autora opinii"
                    width={40}
                    height={40}
                  />
                </Avatar>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "8px"
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "400" }}
                >
                  Paweł Lisicki
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Slider>
  );
}
