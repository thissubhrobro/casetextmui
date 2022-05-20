import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Card, CardMedia, Stack, Typography } from "@mui/material";
const TransparentPricing = () => {
  const text='Transparent pricing'
  const pricing1='"Fair pricing'
  const pricing2=' for an excellent, '
  const pricing3='intuitive product."'
  const author='MORRIS TUCHMAN'
  const designation='Solo attorney'
  return (
    <>
      <Box
        px={{ xs: 6, sm: 14, md:6}}
        py={{ xs: 6, sm: 8, md:6 }}
        bgcolor="#fff"
        color="black"
      >
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} sm={12} md={6} sx={{marginTop:"45px"}}>
              <Typography variant="h4">{text}</Typography>
              <hr/>
              <Typography style={{ marginTop: "5px",fontWeight: "bold" }}>
                {pricing1}
              </Typography>
              <Typography>
                {pricing2}
              </Typography>
              <Typography style={{ fontWeight: "bold" }}>
                {pricing3}
              </Typography>
              <Typography style={{ fontWeight: "bold", marginTop: "5px" }}>
                {author}
              </Typography>
              <Typography style={{ marginTop: "5px" }}>
                {designation}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
            <Stack spacing={4} direction="row">
              <Card>
                <CardMedia component='img' height='200vh' width="100%" image="https://casetext.com/wp-content/uploads/2022/01/unlimited-image.png?__cf_chl_tk=q4QFYxO2TnCSv67tioEiI6INNnC0eQmhBrAUESCeFHM-1648552350-0-gaNycGzNCf0" alt="CaseText Unlimited database">

                </CardMedia>
              </Card>
            </Stack>
              
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TransparentPricing;
