import { Box, Container, Stack } from "@mui/material";
import Posts from "../../components/Posts/Posts";
import Rightbar from "../../components/Rightbar/Rightbar";
import React from "react";

const Main = () => {
  return (
    <Container>
      <Stack direction={"row"} spacing={1} mt={3}>
        <Box flex={3}>
          <Posts />
        </Box>
        <Box flex={1} display={{ xs: "none", md: "block" }}>
          <Rightbar />
        </Box>
      </Stack>
    </Container>
  );
};

export default Main;
