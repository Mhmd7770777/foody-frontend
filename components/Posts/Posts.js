import { Box, Typography, Grid, Pagination, Stack } from "@mui/material";
import React from "react";
import PostCard from "../Card/Card";

const Posts = () => {
  return (
    <Box>
      <Typography variatns="h4" align="center">
        Latest Recipes
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        direction={"column"}
      >
        <Grid item xs>
          <PostCard />
        </Grid>
        <Grid item xs>
          <PostCard />
        </Grid>
        <Grid item xs>
          <PostCard />
        </Grid>
        <Grid item xs>
          <PostCard />
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        bgcolor={"black"}
        color="white"
        align="center"
        mt={4}
        mb={4}
      >
        Most Popular
      </Typography>
      <Grid container columnSpacing={{ xs: 0, sm: 1, md: 1 }} direction={"row"}>
        <Grid item md={6} sm={6}>
          <PostCard myDirection="block" />
        </Grid>
        <Grid item md={6} sm={6}>
          <PostCard myDirection="block" />
        </Grid>
        <Grid item md={6} sm={6}>
          <PostCard myDirection="block" />
        </Grid>
        <Grid item md={6} sm={6}>
          <PostCard myDirection="block" />
        </Grid>
      </Grid>
      <Stack
        spacing={2}
        mt={3}
        mb={3}
        justifyContent="center"
        alignItems="center"
      >
        <Pagination count={10} color={"warning"} />
      </Stack>
    </Box>
  );
};

export default Posts;
