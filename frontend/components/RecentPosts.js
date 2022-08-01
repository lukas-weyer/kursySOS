import Moment from "react-moment";
import "moment/locale/pl";
import truncate from "lodash/truncate";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";

import wezwanieZRM from "../public/wezwanieZRM.png";
import Image from "next/future/image";
import { Button } from "@mui/material";
import Link from "next/link";
import { Link as MUILink } from "@mui/material";

export default function RecentPosts({ posts }) {
  return (
    <Paper variant="outlined" sx={{ width: "100%", padding: "16px" }}>
      <Grid container direction="column" rowSpacing={2}>
        {posts.map((post) => (
          <Grid
            key={post.id}
            item
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Box sx={{ width: "40%" }}>
              <Image
                src={wezwanieZRM}
                alt="wezwanie ZRM"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  maxHeight: "120px",
                  borderRadius: "4px"
                }}
                height="120px"
                placeholder="blur"
              />
            </Box>
            <Card elevation={0} sx={{ width: "60%" }}>
              <CardContent
                sx={{
                  padding: "8px",
                  "&:last-child": {
                    paddingBottom: "8px"
                  }
                }}
              >
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    fontWeight: "700",
                    paddingLeft: "8px"
                  }}
                >
                  {truncate(post.title, { length: 62 })}
                </Typography>
                <Typography
                  variant="caption"
                  component="p"
                  sx={{
                    color: "rgb(100, 110, 115)",
                    paddingLeft: "8px",
                    fontStyle: "italic",
                    margin: "2px 0"
                  }}
                >
                  <Moment format="DD MMM">{post.publishDate}</Moment>
                </Typography>
                <Link scroll={false} href={`/blog/${post.slug}`} passHref>
                  <Button sx={{ textTransform: "none" }}>Czytaj...</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
