import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from "@mui/material/Link";

const pages = ['Subscribe', 'Get a Demo', 'Sign In'];

  
const HeaderTop = () => {
    const [anchorElNav, setAnchorElNav] = useState('')

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
     <AppBar position="static" style={{ background: '#eeeeee' }}>
     
      <Container maxWidth="xl">
        

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="details of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                <MenuItem key={page} onClick={handleCloseNavMenu} color='yellow'>
                  <p textalign="center">{page}</p>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}} style={{paddingLeft:'1000px'}}>
            {pages.map((page) => (
              
              <Link href='/signin'
                  key={page}
                onClick={handleCloseNavMenu}
                sx={{ m: 2, color: 'black', display: 'block'}}     
              underline="hover"
              >
                {page}
              </Link>
                
              
            ))}
          </Box>
            
        
      </Container>
    </AppBar>
    </>
  )
}

export default HeaderTop
