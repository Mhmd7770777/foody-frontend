import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  });

  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Recipes", Link: "#" },
    { Name: "About Us", Link: "#" },
    { Name: "Subscribe", Link: "#" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <AppBar color="default" position="sticky" elevation={0}>
        <StyledToolbar>
          <Box flex={{ xs: 25, md: 1 }}>
            <Typography
              variants="h4"
              color={"tomato"}
              sx={{
                fontFamily: "Splash , cursive",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Codingstrade
            </Typography>
          </Box>
          <MenuBox flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item) => (
              <Typography variants="body2">{item.Name}</Typography>
            ))}
          </MenuBox>
          <Box flex={1}>
            <TextField
              sx={{ display: { xs: "none", md: "flex" } }}
              color="warning"
              label="Search Here!"
              variant="standard"
            />

            <MenuIcon
              sx={{ display: { sx: "flex", md: "none" }, cursor: "pointer" }}
              onClick={() => setOpenMenu(!openMenu)}
            />
          </Box>
        </StyledToolbar>
        <Drawer
          anchor={"top"}
          open={openMenu}
          onClose={() => setOpenMenu(!openMenu)}
        >
          <List>
            <ListItem>
              {MenuItems.map((item) => (
                <ListItemButton variants="body2">{item.Name}</ListItemButton>
              ))}
            </ListItem>
          </List>
          <TextField
            sx={{ display: { xs: "flex", md: "none" } }}
            color="warning"
            label="Search Here!"
            variant="outlined"
          />
        </Drawer>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          padding: 1,
        }}
      >
        <Typography align="center" variant="h5" mr={{ xs: 0, md: 1 }}>
          Simple Recipes made for Coders
        </Typography>
        <Typography
          align="center"
          variant="h5"
          color={"tomato"}
          sx={{ fontFamily: "Splash , cursive" }}
        >
          Simple Recipes made for Coders
        </Typography>
      </Box>
    </>
  );
};

export default Navbar;
