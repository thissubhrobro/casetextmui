import { Box, CardContent, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import SearchHeader from "./SearchHeader";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Card,Stack } from "@mui/material";
import Header from "./Header";
const SearchPage = () => {
  const heading="Top 25 cases recommended by Parallel Search"
  const para="Cases with sentences that are conceptually similar to your query"
  const [data, setData] = useState([]);
  const url = 
     `./searchdata.json`
  useEffect(() => {
    fetch(url).then((res) => {
      res.json().then((resp) => {
        setData(resp);
      });
    });
  }, [url]);
  console.log(data)
  return (
    <>
      {/* <SearchHeader/> */}
      <Header/>
    <Box sx={{textAlign:"center"}}>
      <h4>{heading}</h4>
      <p>{para}</p>

      <Grid container spacing={2} >
                <Grid item xs>
                    <Card component={Paper}>
                            <CardContent>
                                    {(data).map((item, index) => (
                                    <Stack key={index} selected="false" direction="column" spacing={2}>
                                        <Box>{item.heading}</Box>
                                        <Box>{item.subheading}</Box>
                                        <Box>{item.bodycontent}</Box>
                                    </Stack>))}
                            </CardContent>
                    </Card>
                </Grid>    
            </Grid>
    </Box>
    <Divider/>
    <Footer/>
    </>
  );
};

export default SearchPage;
