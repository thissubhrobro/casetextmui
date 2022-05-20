import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
const PricingWithContactUs = () => {
  return (
    <>
      <Box
        px={{ xs: 6, sm: 14, md:6}}
        py={{ xs: 6, sm: 8, md:6 }}
        bgcolor="blue"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6} md={6} >
              <Typography variant="h4">
                Take your firm's legal research and writing to the next level.
              </Typography>
              <Typography style={{ fontWeight: "bold", marginTop: "5px" }}>
                <Link href="/" color="inherit">
                  Subscribe Now
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
              <Typography style={{ fontWeight: "bold" }}>
                <Link href="/" color="inherit">
                  <Button
                    style={{
                      backgroundColor: "white",
                      padding: "18px 56px",
                      fontSize: "18px",
                    }}
                  >
                    View Pricing
                  </Button>
                </Link>
              </Typography>
              <Typography style={{ fontWeight: "bold" }}>
                <Link href="/" color="inherit" style={{textDecoration:"none"}}>
                  <Button
                    style={{
                      marginTop: "5px",
                      color: "white",
                      border: "2px solid white",
                      padding: "18px 56px",
                      fontSize: "16px"
                      
                    }}
                    variant="outlined"
                  >
                    Contact &nbsp;&nbsp;&nbsp; Us
                  </Button>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PricingWithContactUs;
