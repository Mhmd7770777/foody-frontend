import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Category from "../CategoryList/Category";
import burger from "../../styles/images/burger.jpg";

const Hero = () => {
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    cursor: "pointer",

    [theme.breakpoints.up("md")]: {
      height: 400,
    },

    [theme.breakpoints.down("md")]: {
      height: 200,
    },

    "&:hover": {
      opacity: 0.8,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: "all 0.45s ease",
    },
  }));

  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "white",
    background: "tomato",
    fontSize: 20,
  });

  const StyledWrapper = styled(Box)(({ theme }) => ({
    width: "80%",

    [theme.breakpoints.up("md")]: {
      paddingTop: "140%",
    },

    [theme.breakpoints.down("md")]: {
      paddingTop: "40%",
    },
  }));

  return (
    <Container>
      <Grid container direction={"row"} columnSpacing={2} rowSpacing={2}>
        <Grid item xs={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url(${burger})` }}></StyledCard>
          <StyledWrapper>
            <StyledTypography>Burger</StyledTypography>
          </StyledWrapper>
        </Grid>
        <Grid item xs={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url(${burger})` }}></StyledCard>
          <StyledWrapper>
            <StyledTypography>Burger</StyledTypography>
          </StyledWrapper>
        </Grid>
        <Grid item xs={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url(${burger})` }}></StyledCard>
          <StyledWrapper>
            <StyledTypography>Burger</StyledTypography>
          </StyledWrapper>
        </Grid>
        <Grid item xs={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url(${burger})` }}></StyledCard>
          <StyledWrapper>
            <StyledTypography>Burger</StyledTypography>
          </StyledWrapper>
        </Grid>
      </Grid>
      <Category />
    </Container>
  );
};

export default Hero;
