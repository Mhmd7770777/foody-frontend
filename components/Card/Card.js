import {
  Box,
  Link,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

const PostCard = ({ myDirection }) => {
  return (
    <Box mt={3}>
      <Link href={"#"} sx={{ textDecoration: "none" }}>
        <Card>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: `${myDirection || "flex"}`,
                md: `${myDirection || "flex"}`,
              },
              flexDirection: "row",
            }}
          >
            <CardMedia
              component={"img"}
              height="300"
              image={``}
              alt="burger image "
              sx={{
                widthh: "400px",
                cursor: "pointer",
                "&hover": {
                  opacity: 0.8,
                  boxSizing: "border-box",
                  zIndex: 1,
                  transition: `all 0.50s ease`,
                },
              }}
            />
            <CardContent>
              <Typography gutterButtom variant="h4" align="center">
                Yummy Burger
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Yummy Burger Yummy Burger Yummy Burger Yummy Burger Yummy Burger
              </Typography>
              <CardActions>
                <Button sx={{ color: "tomato" }} size="large">
                  Share
                </Button>
                <Button sx={{ color: "tomato" }} size="large">
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};

export default PostCard;
