import React from 'react';
import Logo from '../Logo';
import './style.css';
import {ReactComponent as FavIcon} from "./img/ic-favorites.svg";
import {ReactComponent as CartIcon} from "./img/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "./img/ic-profile.svg";
import { AppBar, IconButton, Toolbar, Container, Typography, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '50vw',
        '&:focus': {
          width: '60vw',
        },
      },
    },
  }));
  
const Header = () => {

    return (
        <div className="header__wrapper">
            <AppBar position='static' sx={{bgcolor: "#ffe44d", margin: 0}}>
            <Toolbar sx={{m:2}} >
                <Logo />
                <Search sx={{borderRadius: '30px', flexGrow: 1, mr:3}}>
                <SearchIconWrapper>
                <SearchIcon sx={{color: '#000'}}/>
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Поиск"
                inputProps={{ 'aria-label': 'search' }}
                sx = {{bgcolor: "#fff3",  color: '#000', borderRadius: '30px'}}
                />
                </Search>
                <Box>
                    <IconButton>
                    <a href="#"><FavIcon/></a>
                    </IconButton>
                    <IconButton>
                    <a href="#"><CartIcon/></a>
                    </IconButton>
                    <IconButton>
                    <a href="#"><ProfileIcon/></a>
                    </IconButton>
                </Box>                  
            
            </Toolbar>          
        </AppBar>
        </div>
        
    )
}

export default Header;