import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Button, Divider } from "@mui/material";
import { Typography } from "@mui/material";
const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 4, sm: 8 }}
        py={{ xs: 4, sm: 8 }}
        bgcolor="lightgrey"
        color="black"
        style={{margin:"auto"}}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8}>
          <Grid item xs={8} sm={3}>
              <Typography>Make your practice more effective and efficient with Casetext’s legal research suite.</Typography>
              <Button variant="contained" style={{marginTop:'5px'}}>
                  Get a Demo
              </Button>
          </Grid>
            <Grid item xs={8} sm={3}>
              <Typography style={{ fontWeight: "bold" }}>
                <Link href="/" color="inherit">
                  Casetext research
                </Link>
              </Typography>
              <Typography style={{ fontWeight: "bold" }}>
                <Link href="/" color="inherit">
                  Parallal search
                </Link>
              </Typography>
              <Typography style={{ fontWeight: "bold" }}>
                <Link href="/" color="inherit">
                  Compose
                </Link>
              </Typography>
              <Divider />
              <Box>
                <Link href="/" color="inherit">
                  Pricing
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Switch
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Big Firm
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Coverage
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Smart Cite
                </Link>
              </Box>
              <Divider />
              <Box>
                <Link href="/" color="inherit">
                  Public Record Search
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Partnerships and Resources
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Law School Access
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Bar Associations
                </Link>
              </Box>
            </Grid>

            <Grid item xs={10} sm={3}>
              <Typography style={{ fontWeight: "bold" }}>About Us</Typography>
              <Divider />
              <Box>
                <Link href="/" color="inherit">
                  Jobs
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Blog
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Podcast
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  News
                </Link>
              </Box>
              <Divider/>
              <Box>
                <Link href="/" color="inherit">
                  Twitter
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Facebook
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  LinkedIn
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Instagram
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography style={{ fontWeight: "bold" }}>Messages</Typography>
              <Divider />
              <Box>
                <Link href="/" color="inherit">
                  Help Articles
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Customer Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact Sales
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy 
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Terms 
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            @{new Date().getFullYear()} CaseText Inc.CaseText Inc and CaseText are not a law firm and do not provide legal advice. 
          </Box>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          <Link href="/">
        <Button variant="contained">
            Back to Home
        </Button>
      </Link>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;
