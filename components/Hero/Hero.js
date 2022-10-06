import { Box, Container, Grid, styled } from "@mui/material";

const Hero = () => {
  const StyledCard = styled(Box)({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: 400,
  });
  return (
    <Container>
      <Grid container direction={"row"} columnSpacing={2} rowSpacing={2}>
        <Grid item xs={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url()` }}></StyledCard>
        </Grid>
        <Grid item xs={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url()` }}></StyledCard>
        </Grid>
        <Grid item xs={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url()` }}></StyledCard>
        </Grid>
        <Grid item xs={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url()` }}></StyledCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
