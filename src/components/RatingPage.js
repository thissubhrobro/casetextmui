import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import { Link } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const RatingPage = () => {
  const pricing = '"Casetext is the best thing I have ever used."';
  const author = "JAMES ANAGNOSTAKIS";
  const designation = "Solo Attorney";
  
  return (
    <>
      <Box
        px={{ xs: 6, sm: 14, md: 6 }}
        py={{ xs: 6, sm: 8, md: 6 }}
        bgcolor="#E6E6FA"
        color="black"
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="div"
            sx={{ mb: "16px", textAlign: "center" }}
          >
            #1 Rated Legal Research Software
          </Typography>

          <Stack spacing={2} direction="row" color="orange">
            <Box style={{ margin: "auto" }}>
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
            </Box>
          </Stack>
          <Grid container spacing={10}>
            <Grid
              item
              xs={12}
              sm={6}
              // sx={{ marginTop: "45px", marginLeft: "300px" }}
              // sx={{ mt: "45px", ml: "300px" }}
              style={{ margin: "auto" }}
            >
              <Link
                href="/"
                color="inherit"
                underline="hover"
                sx={{ textDecoration: "none", color: "blue" }}
              >
                <Typography style={{ fontWeight: "bold", textAlign: "center" }}>
                  G2 CROWD
                </Typography>
              </Link>
              <Typography style={{ marginTop: "5px", textAlign: "center" }}>
                {pricing}
              </Typography>
              <Typography
                style={{
                  fontWeight: "bold",
                  marginTop: "5px",
                  textAlign: "center",
                }}
              >
                {author}
              </Typography>
              <Typography style={{ marginTop: "2px", textAlign: "center" }}>
                {designation}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default RatingPage;
