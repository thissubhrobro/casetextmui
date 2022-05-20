import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Button, Card, CardMedia, Stack } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tooltip from '@mui/material/Tooltip';
import { Avatar } from '@mui/material';

const pages = ['Why Casetext', 'Pricing','Help' ,'Sign In','Free Trial','Create Alert','Sorted by Parallel Search'];

  
const SearchHeader = () => {
let imgaddr='data:image/jpeg;base64,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'

    const [anchorElNav, setAnchorElNav] = useState('')

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
     <AppBar position="sticky" style={{ background: '#eeeeee' }}>
     
      <Container maxWidth="xl">
      <Box
            noWrap
            sx={{  display: { xs: 'none', md: 'flex' } }}
          >
           <Avatar  width={176} src={imgaddr} alt='casetext' sx={{mt:2}}/>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="details of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:'blue'}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <p textalign="center">{page}</p>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}} style={{paddingLeft:'900px'}}>
          
          <Stack spacing={2} direction="column">
              <Stack spacing={2} direction="row">
            
              <Box color='blue' sx={{ textAlign: "center" }}>
              Why Casetext
              </Box>
            
              <Box color='blue' sx={{ textAlign: "center" }}>
              Pricing
              </Box>
            
              <Box color='blue' sx={{ textAlign: "center" }}>
              Help
              </Box>
            
              <Box color='blue' sx={{ textAlign: "center" }}>
              Sign In
              </Box>
            
              <Button variant='contained'>
                 Free Trial
              </Button>
            </Stack>
            <Stack spacing={5} direction="row" pl={8}>
                <Box color='blue' >
                <Tooltip title='Alert is not avaialable for parallel search'>
                <IconButton>
                    <NotificationsIcon fontSize='small' sx={{color:'blue'}}/>
                </IconButton>
                 
                </Tooltip>
                Create Alert
              </Box>
              <Box color='blue' sx={{pt:0.5}}>
              Sorted by Parallel Search
              </Box>
            </Stack>
          </Stack>
        
          </Box>
      </Container>
    </AppBar>
    </>
  )
}

export default SearchHeader


