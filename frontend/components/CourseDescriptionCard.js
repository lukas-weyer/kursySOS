import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ListItemText from "@mui/material/ListItemText";

import { motion } from "framer-motion";

import Image from "next/future/image";
import { border } from "@mui/system";

export default function CourseDescriptionCard({
  mirror,
  title,
  image,
  description,
  lessons
}) {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ padding: "32px 16px", order: mirror ? "1" : "0" }}
        >
          {image && (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                boxShadow: "rgb(140 152 164 / 28%) 0px 10px 40px 10px"
              }}
              component={motion.div}
              initial={{ opacity: 0, x: mirror ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 30 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src={image}
                alt="kadr z kursu"
                placeholder="blur"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "4px"
                }}
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: "32px 16px" }}>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            component={motion.div}
            initial={{ opacity: 0, x: mirror ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 30,
              delay: 0.1
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography variant="h4" component="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: "rgb(100, 110, 115)" }}>
              {description}
            </Typography>
            <List>
              {lessons &&
                lessons.map((lesson) => (
                  <ListItem key={lesson.id}>
                    <ListItemIcon>
                      <CheckBoxIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText>{`Lekcja ${lesson.number}. ${lesson.title}`}</ListItemText>
                  </ListItem>
                ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
