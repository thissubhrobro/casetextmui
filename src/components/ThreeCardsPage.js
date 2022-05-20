import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  Card,
  CardContent,
  CardActions,
  Typography,Button, CardMedia
} from "@mui/material";

const ThreeCardsPage = () => {
  const text = "The best lawyers use the best tools.";
  const content1 =
    "A true legal replacement for Lexis and Westlaw for an affordable price. Casetext Research offers full coverage of all 50-state and federal cases, statutes, regulations, and rules. Also included is access to CARA A.I., the document analyzer tool.";
  const content2 =
    "Search the way attorneys think for an affordable price. With help from a neural transformer model trained on the law, Parallel Search uses complete sentences to find you results with matching concepts, even if they use none of the same keywords.";

  const content3 =
    "With all-inclusive bundles, you’ll no longer need to hunt to find the right arguments and authorities before you can start drafting. Compose pairs the insights of expert attorneys with cutting-edge machine learning for a smarter way to draft stronger briefs.";
  return (
    <>
      <Box
        px={{ xs: 6, sm: 8}}
        py={{ xs: 6, sm: 8}}
        bgcolor="#fff"
        color="black"
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{ textAlign: "center" }}
            gutterBottom
          >
            {text}
          </Typography>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={4} sx={{ mt: "25px" }}>
              
                <Card>
                  {/* image */}
                  <CardMedia component="img" height="300vh" width="100%" image={require('./images/Casetext-Stacked.jpg')} alt="Casetext-Stacked"/>
                  <CardContent>
                  <Typography component="div" variant="h5">
                  Casetext Research
                  </Typography>
                  {/* by default variant body1 for large text */}
                    <Typography component="div" variant="body2">
                      {content1}
                    </Typography>
                  </CardContent>
                  <br />
                  <CardActions>
                    <Button size="small" sx={{m:'auto'}}>Learn More</Button>
                  </CardActions>
                </Card>
                
                
              
            </Grid>
            <Grid item xs={12} sm={4} sx={{ mt: "25px"}}>
            <Card>
                  {/* image */}
                  <CardMedia component="img" height="300vh" width="100%" image={require('./images/ParallelSearch.jpg')} alt="ParallelSearch"/>
                  <CardContent>
                  <Typography component="div" variant="h5">
                  Parallel Search
                  </Typography>
                    <Typography component="div" variant="body2">
                      {content2}
                    </Typography>
                  </CardContent>
                  <br />
                  <CardActions>
                    <Button size="small" sx={{m:'auto'}}>Learn More</Button>
                  </CardActions>
                </Card>
                

            </Grid>
            <Grid item xs={12} sm={4} sx={{ mt: "25px"}}>
            <Card>
                  {/* image */}
                  <CardMedia component="img" height="300vh" width="100%" image={require('./images/Compose.jpg')} alt="Compose"/>
                  <CardContent>
                  <Typography component="div" variant="h5">
                  Compose
                  </Typography>
                    <Typography component="div" variant="body2">
                      {content3}
                    </Typography>
                  </CardContent>
                  <br />
                  <CardActions>
                    <Button size="small" sx={{m:'auto'}}>Learn More</Button>
                  </CardActions>
                </Card>
                

            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ThreeCardsPage;
