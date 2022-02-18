import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,

} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import Logo from "../image/aljiwar.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  logo: {
    maxWidth: 60,
    borderRadius: "50%",
    marginLeft: '30px',
    marginTop: '10px'
  },
});

const DrawerComp = () => {
  const classes = useStyles();
  const [opendrawer, setopendrawer] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Drawer open={opendrawer} onClose={() => setopendrawer(false)}>
        {/* <Toolbar /> */}
        <img
                src={Logo}
                alt="Ajiwar"
                className={classes.logo}
              />
        <List>
          <ListItemButton onClick={() => setopendrawer(!opendrawer)}>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText onClick={()=>navigate('/')}>Home</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setopendrawer(!opendrawer)}>
            <ListItemIcon>
             <AdminPanelSettingsIcon/>
            </ListItemIcon>
            <ListItemText onClick={()=>navigate('/admin')}>admin</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setopendrawer(!opendrawer)}>
            <ListItemIcon>
              <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText onClick={()=>navigate('/profile')}>profile</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setopendrawer(!opendrawer)}>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText onClick={() => navigate("/login")}>login</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setopendrawer(!opendrawer)}>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText onClick={() => navigate("/register")}>register</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setopendrawer(!opendrawer)}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>logout</ListItemText>
          </ListItemButton>


        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white" }}
        onClick={() => setopendrawer(!opendrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
