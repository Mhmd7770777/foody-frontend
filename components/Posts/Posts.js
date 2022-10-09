import { Box, Typography, Grid } from "@mui/material";
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
    </Box>
  );
};

export default Posts;
