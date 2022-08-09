import {
  Box,
  Container,
  FormControl,
  Grid,
  Input,
  InputBase,
  InputLabel,
  TextField,
  Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";

import loginSVG from "../public/svg/loginSVG.svg";

import { useFormik } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";
import Image from "next/future/image";
YupPassword(yup);

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Podałeś niepoprwny adres email.")
    .required("Podanie adresu email jest wymagane."),
  password: yup.string().required("Podanie hasła jest wymagane")
});

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <Container
      sx={{
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        <Grid item sx={{ display: { xs: "none", md: "block" } }} md={6}>
          <Image
            src={loginSVG}
            alt="login SVG"
            style={{ width: "100%", height: "auto", maxWidth: "500px" }}
          />
        </Grid>
        <Grid item xs={8} md={6}>
          <Box mb={4}>
            <Typography
              variant="p"
              component="p"
              gutterBottom
              color="rgb(103, 119, 136)"
              sx={{ textTransform: "uppercase" }}
            >
              logowanie
            </Typography>
            <Typography variant="h4" gutterBottom>
              Witaj ponownie!
            </Typography>
            <Typography variant="p" component="p" color="rgb(103, 119, 136)">
              Zaloguj się aby zarządzać swoim kontem.
            </Typography>
          </Box>
          <form method="POST" onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" component="h6">
                  Podaj adres email
                </Typography>
                <TextField
                  id="email-input"
                  variant="outlined"
                  label="Email *"
                  fullWidth
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" component="h6">
                  Podaj hasło
                </Typography>
                <TextField
                  type="password"
                  id="password-input"
                  variant="outlined"
                  label="Hasło *"
                  fullWidth
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid
                item
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="subtitle2" component="h6" gutterBottom>
                    Nie posiadasz konta?
                    <Link href="/rejestracja" passHref>
                      <Button>Zarejestruj się</Button>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" size="large">
                    Zaloguj się
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}
