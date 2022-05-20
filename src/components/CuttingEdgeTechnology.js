import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Card, CardMedia, Stack, Typography } from "@mui/material";
const CuttingEdgeTechnology = () => {
    const text = "Cutting-edge technology";
  const pricing1 = '"Casetext has consistently gone';
  const pricing2 = 'above and beyond';
  const pricing3 = 'what we thought was possible."';
  const author = "FLYN FLESHER";
  const designation = "Senior Manager of KM Counsel, Ogletree Deakins";
  return (
    <>
    <Box
        px={{ xs: 6, sm: 14, md:6}}
        py={{ xs: 6, sm: 8, md:6 }}
        bgcolor="#fff"
        color="black"
        >
        <Container maxWidth="lg">
        <Typography variant="h3" component="div" sx={{mb:"16px",textAlign:"center"}}>The best results, from the best technology, for the best price.</Typography>
            <Grid container spacing={10}>

            <Grid item xs={12} sm={12} md={6} sx={{ mt: "45px" }}>
                <Typography variant="h4">{text}</Typography>
                <hr />
                <Typography style={{ marginTop: "5px" }}>
                {pricing1}
                </Typography>
                <Typography sx={{fontWeight: "bold"}}>{pricing2}</Typography>
                <Typography>{pricing3}</Typography>
                <Typography style={{ fontWeight: "bold", marginTop: "5px" }}>
                {author}
                </Typography>
                <Typography style={{ marginTop: "2px" }}>{designation}</Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>  
                <Stack spacing={4} direction="row">
                <Card>
                    <CardMedia component='img' height='200vh' width="100%" image={require('./images/Cutting-edgeTech.jpg')} alt="Cutting Edge Technology"/>
                </Card>
                </Stack> 
            </Grid>
            </Grid>
        </Container>
        </Box>
    </>
  )
}

export default CuttingEdgeTechnology
