import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
const PartnersPage = () => {
  const text =
    "Trusted by 9,000 firms, from solo practitioners to Am Law 100 firms";

  return (
    <>
      <Box
        px={{ xs: 4, sm: 14, md: 6 }}
        py={{ xs: 4, sm: 8, md: 6 }}
        bgcolor="#fff"
        color="white"
      >
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ mb: "16px", textAlign: "center",color:'black' }}>
            {text}
          </Typography>
          <Grid container my={2} spacing={2}>
            <Grid item xs>
              <Box bgcolor="gray" px={2} sx={{ textAlign: "center" }}>
                Bowman and Brooke
              </Box>
            </Grid>
            <Grid item xs>
              <Box bgcolor="gray" px={2} sx={{ textAlign: "center" }}>
                EVERSHEDS SUTHERLAND
              </Box>
            </Grid>
            <Grid item xs>
              <Box bgcolor="gray" px={2} sx={{ textAlign: "center" }}>
                Ogletree Deakins
              </Box>
            </Grid>
            <Grid item xs>
              <Box bgcolor="gray" px={2} sx={{ textAlign: "center" }}>
                SheppardMullin
              </Box>
            </Grid>
            </Grid>
        <Grid container my={2} spacing={5}>
            <Grid item xs>
              <Box bgcolor="gray" px={6} sx={{ textAlign: "center" }}>
                SQUIRE PATTON BOGGS
              </Box>
            </Grid>
            <Grid item xs>
              <Box bgcolor="gray" px={6} sx={{ textAlign: "center" }}>
                Littler
              </Box>
            </Grid>
            <Grid item xs>
              <Box bgcolor="gray" px={6} sx={{ textAlign: "center" }}>
                ReedSmith
              </Box>
            </Grid>
        </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PartnersPage;
