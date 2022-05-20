import { useState } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  backgroundColor: "#fff",
  "& .MuiInputBase-input": {
    // vertical padding + font size from searchIcon
    padding: "5px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const SearchFront = () => {
  const text = "You know the law; we know the cite.";
  const text2 =
    "Try it! Type your argument summarized as a sentence below to find on-point case law.";
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        px={{ xs: 4, sm: 12 }}
        py={{ xs: 4, sm: 12 }}
        bgcolor="#E6E6FA"
        color="black"
      >
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
            {text}
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Typography variant="p" gutterBottom>
                {text2}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ textAlign: "center" }}>
                <SearchIcon />
                <StyledInputBase
                  placeholder="Example:The court must abandon precedent in the interest of justice"
                  inputProps={{ "aria-label": "search" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ textAlign: "center" }}>
                <Link href="/search">
                  <Button
                    onClick={handleToggle}
                    variant="contained"
                    style={{
                      padding: "10px 40px",
                      fontSize: "12px",
                    }}
                  >
                    Search Now
                  </Button>

                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1
                    }}
                    open={open}
                    onClick={handleClose}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SearchFront;
