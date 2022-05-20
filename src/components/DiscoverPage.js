import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import { Button } from "@mui/material";
const DiscoverPage = () => {
  const text = "Discover how Casetext can help your firm win more cases";

  return (
    <>
      <Box
        px={{ xs: 6, sm: 12, md: 6 }}
        py={{ xs: 6, sm: 8, md: 6 }}
        bgcolor="#E6E6FA"
        color="black"
      >
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6} md={6} sx={{ mt: "45px" }}>
              <Typography
                variant="h3"
                component="div"
                sx={{ mb: "16px", textAlign: "center" }}
              >
                {text}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ mt: "45px", m: "auto"}}>
              <Stack spacing={4} direction="row">
                <Button variant="contained" style={{
                      padding: "10px 40px",
                      fontSize: "12px",
                    }}>Try Free for 14 Days</Button>
                <Button
                  variant="outlined"
                  style={{ border: "2px solid blue", color: "blue",
                      padding: "10px 40px",
                      fontSize: "12px",
                    }}
                >
                  Get a Demo
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default DiscoverPage;
