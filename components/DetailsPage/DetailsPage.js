import {
  Box,
  CardMedia,
  Container,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Category from "../CategoryList/Category";
import React from "react";
import { DoubleArrowIcon } from "@mui/icons-material/DoubleArrow";

const DetailsPage = () => {
  return (
    <Container>
      <Category />
      <Typography variant="h3" align="center" mt={4}>
        Title of the Recipe
      </Typography>
      <Typography variant="body2" align="center" color={"GrayText"} p={4}>
        these recipes may contain afiliate links. Please read my disclosure
        policy
      </Typography>
      <Typography variant="body1" align="center" m={2}>
        Title of the Recipe Title of the Recipe Title of the Recipe Title of the
        Recipe Title of the Recipe Title of the Recipe Title of the Recipe Title
        of the Recipe Title of the Recipe Title of the Recipe Title of the
        Recipe
      </Typography>
      <Box sx={{ display: "flexx", justifyContent: "center" }}>
        <CardMedia
          sx={{ height: "500px", width: "500px" }}
          component="img"
          image={``}
          alt="burger"
        />
      </Box>
      <Typography variant="body1" align="center" m={2}>
        Title of the Recipe Title of the Recipe Title of the Recipe Title of the
        Recipe Title of the Recipe Title of the Recipe Title of the Recipe Title
        of the Recipe Title of the Recipe Title of the Recipe Title of the
        Recipe
      </Typography>
      <Typography variant="h3" align="center" m={2}>
        Ingredients
      </Typography>
      <List>
        <ListItemIcon>
          <DoubleArrowIcon />
          <ListItemText primart="Meat" />
        </ListItemIcon>
      </List>
    </Container>
  );
};

export default DetailsPage;
