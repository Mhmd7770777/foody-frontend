import { Box, Container, Grid, styled, Typography } from "@mui/material";

const Hero = () => {
  const StyledCard = styled(Box)({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: 400,
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: "all 0.45s ease",
    },
  });

  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "white",
    background: "tomato",
    fontSize: 20,
  });

  const StyledWrapper = styled(Box)({
    paddingTop: "140%",
    width: "80%",
  });

  return (
    <Container>
      <Grid container direction={"row"} columnSpacing={2} rowSpacing={2}>
        <Grid item xs={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url()` }}></StyledCard>
          <StyledWrapper>
            <StyledTypography>Burger</StyledTypography>
          </StyledWrapper>
        </Grid>
        <Grid item xs={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url()` }}></StyledCard>
          <StyledWrapper>
            <StyledTypography>Burger</StyledTypography>
          </StyledWrapper>
        </Grid>
        <Grid item xs={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url()` }}></StyledCard>
          <StyledWrapper>
            <StyledTypography>Burger</StyledTypography>
          </StyledWrapper>
        </Grid>
        <Grid item xs={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url()` }}></StyledCard>
          <StyledWrapper>
            <StyledTypography>Burger</StyledTypography>
          </StyledWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
