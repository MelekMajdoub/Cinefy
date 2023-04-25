import React, { useState } from 'react'
import '../styles/Home.css'
import LogoNavBar from "../assets/LogoNavBar.svg"
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from  "@mui/icons-material/Home";
import MovieIcon from '@mui/icons-material/Movie';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions=[
        {
            text:"Home",
            icon:<HomeIcon />
        },
        {
            text:"All Movies",
            icon:<MovieIcon />
        },
        {
            text:"Short Movies",
            icon:<CameraRollIcon />
        },
        {
            text:"Long Movies",
            icon:<LocalMoviesIcon />
        },
        {
            text:"Documentaries",
            icon:<GroupWorkIcon />
        },
        {
            text:"Contact Us",
            icon:<PersonIcon />
        },
    ]

  return (
    <nav className='nav-bar'>
        <div className='nav-logo-container'>
            <img src={LogoNavBar} alt="LogoBar"/>
        </div>
        <div className='navbar-links-container'>
            <a href="">Home</a>
            <a href="">All Movies</a>
            <a href="">Short Movies</a>
            <a href="">Long Movies</a>
            <a href="">Documentaries</a>
            <a href="">Contact</a>
            
            <button className='primary-button'>
                <i className='icon'><ExitToAppIcon /></i>
                Log Out
            </button>
        </div>
        <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />

        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
        
    </nav>
  )
}

export default Navbar