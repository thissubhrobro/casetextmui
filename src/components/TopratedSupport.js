import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Card, CardContent, IconButton, Stack, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
const TopratedSupport = () => {
  const text = "Top-rated support";
  const pricing1 = '"I have only used their customer service on a few occasions, but every time they have met and';
  const pricing2 = 'exceeded my expectations."';
  const author = "JACK STURGILL";
  const designation = "Solo attorney";
  return (
    <Box
      px={{ xs: 3, sm: 14 }}
      py={{ xs: 3, sm: 8 }}
      bgcolor="#E6E6FA"
      color="black"
    >
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
              
              <Stack spacing={2} direction="row">

              <Avatar src="/broken-image.jpg" sx={{ width: 56, height: 56 }}/>
              <Card>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">How can I access statues,regulations and rules?</Typography>
                  </CardContent>
              </Card>
              </Stack>
              <Stack spacing={2} direction="row" sx={{mt:'25px'}}>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{p:"2px"}}> <IconButton><EditIcon/> </IconButton> Subhronil is Typing...</Typography>
                    </CardContent>
                </Card>
              <Avatar src="https://randomuser.me/api/portraits/men/79.jpg" sx={{ width: 56, height: 56 }}/>
              </Stack>   
          </Grid>

          <Grid item xs={12} sm={6} sx={{ marginTop: "45px" }}>
            <Typography variant="h4">{text}</Typography>
            <hr />
            <Typography style={{ marginTop: "5px" }}>
              {pricing1}
            </Typography>
            <Typography sx={{fontWeight: "bold"}}>{pricing2}</Typography>
            <Typography style={{ fontWeight: "bold", marginTop: "5px" }}>
              {author}
            </Typography>
            <Typography style={{ marginTop: "5px" }}>{designation}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopratedSupport;
