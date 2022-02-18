import {
  AppBar,
  Avatar,
  Button,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import DrawerComp from "./DrawerComp";
import Logo from "../image/aljiwar.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  logo: {
    maxWidth: 40,
    marginRight: "10px",
    borderRadius: "50%",
  },
});

const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar position="sticky" sx={{ background: "#157eae" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <DrawerComp /> 
              <Typography
              onClick={() => navigate("/")}
                sx={{ color: "#f49d2c", fontWeight: "bold", fontSize: "25px",marginLeft: 2 }}
              > ALJIWAR </Typography>
              {/* <Typography sx={{ marginLeft: "auto" }}>ALJIWAR</Typography> */}
              <Stack direction="row" spacing={1} sx={{ marginLeft: "10px" }}>
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  alt="Taoufik"
                  src="/images/taoufik.jpg"
                />
              </Stack>
            </> 
          ) : (
            <>
              <img onClick={() => navigate("/")} src={Logo} alt="Ajiwar" className={classes.logo} />
              <Typography
               onClick={() => navigate("/")}
               
                sx={{ color: "#f49d2c", fontWeight: "bold", fontSize: "25px",marginLeft: 2 }}
              > ALJIWAR</Typography>

              <Tabs
                textColor="inherit"
                onChange={(e, value) => setValue(value)}
                value={value}
                indicatorColor="primary"
                sx={{ marginLeft: 8 }}
              >
                <Tab label="home" onClick={() => navigate("/")} />
                <Tab label="admin" onClick={() => navigate("/admin")} />
                <Tab label="profile" onClick={() => navigate("/profile")} />
              </Tabs>

              <Button onClick={() => navigate("/login")} sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px", marginRight: "10px" }}variant="contained">
                Logout
              </Button>
              <Button onClick={() => navigate("/register")} sx={{  marginRight: "10px" }}variant="contained">
                Register
              </Button>

              <Stack direction="row" spacing={1}>
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  alt="Taoufik"
                  src="/static/images/avatar/1.jpg"
                />
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* <Link  to="/">home</Link> {" "}
      <Link to="/admin">admin</Link>{" "}
      <Link to="/admin/profileDashboard">adminprofile</Link> */}
    </>
  );
};

export default NavBar;
