import {
  Box,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import React from "react";

const Rightbar = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" align="center" mt={5}>
        Hey I'm Tasty
      </Typography>
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
      <Typography variant="body1" align="left">
        Hey I'm Tasty Hey I'm Tasty Hey I'm Tasty Hey I'm Tasty Hey I'm Tasty
        Hey I'm Tasty
      </Typography>
      <Typography variant="body1" align="left">
        Hey I'm Tasty Hey I'm Tasty Hey I'm Tasty Hey I'm Tasty Hey I'm Tasty
        Hey I'm Tasty
      </Typography>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography variant="body1" align="center">
          Ads Here
        </Typography>
      </Card>
      <Typography align="center" color="white" bgcolor="tomato" mt={2}>
        Subscribe via Email
      </Typography>
      <Box
        sx={{
          pl: 10,
        }}
      >
        <TextField label="Your Email Here" variant="standard" color="warning" />
        <IconButton>
          <SendIcon sx={{ color: "tomato" }} />
        </IconButton>
      </Box>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography variant="body1" align="center">
          Ads Here!!
        </Typography>
      </Card>
    </Box>
  );
};

export default Rightbar;
