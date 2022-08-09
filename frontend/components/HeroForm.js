import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Link as MUILink } from "@mui/material";

import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Imię musi składać się z minimum 3 liter.")
    .required("Podanie imienia jest wymagane"),
  email: yup
    .string()
    .email("Podałeś niepoprwny adres email.")
    .required("Podanie adresu email jest wymagane.")
});

export default function HeroForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Paper
      elevation={0}
      sx={{ boxShadow: "rgb(140 152 164 / 18%) 0px 10px 40px 10px" }}
    >
      <Box sx={{ padding: "48px" }}>
        <Grid
          container
          rowSpacing={2}
          component="form"
          justifyContent="center"
          direction="column"
          onSubmit={formik.handleSubmit}
          method="POST"
        >
          <Grid item justifyContent="center">
            <TextField
              fullWidth
              id="name"
              name="name"
              label="imię"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>

          <Grid item justifyContent="center">
            <TextField
              fullWidth
              id="email"
              name="email"
              label="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              size="medium"
              fullWidth
              sx={{ height: "56px" }}
              type="submit"
            >
              Zapisz się
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box sx={{ padding: "48px" }}>
        <Typography variant="body2">
          Podając adres email akceptujesz naszą{" "}
          <Link
            component={MUILink}
            href="/polityka-prywatnosci"
            color="primary"
            passHref
          >
            <MUILink color="primary">Politykę Prywatności</MUILink>
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
}
