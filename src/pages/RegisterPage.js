import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "./../contexts/AuthContext";
import { useState } from "react";
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import { City }  from 'country-state-city';
// import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import  IconButton  from '@mui/material/IconButton';


function Copyright(props) {

  return ( 
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
       Aljiwar
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

// const useStyles=makeStyles((theme)=>({
//   formControl:{
//     margin:theme.spacing(1),
//     minWidth:180
//   }
// }))

export default function RegisterPage() {
  // const classes=useStyles()
  const { register,allCountry } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country1, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [countryCode, setcountryCode] = useState("");
  const [allCities, setallCities] = useState([]);
  const [gender, setGender] = useState('male');
  const [dat, setDat] = useState('');
  const [showPassword, setshowPassword] = useState(false);


  const handleClickShowPassword = () => {
      setshowPassword(!showPassword) 
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };





  const handleDate = (newValue) => {
    setDat(newValue);
  };

    
  const handleCities=()=>{
    setallCities([])
    let str=""
       str =  country1;
      str = str.substring(str.length - 2);          
       setcountryCode(str)
       console.log("countryCode:",countryCode);
        setallCities(City.getCitiesOfCountry(str))
      // console.log(City.getCitiesOfCountry(str));    
        //  console.log(allCities);    
  }

  const handleSubmit = (e) => {
     e.preventDefault();
       let country=""
       country =  country1;
       country = country.slice(0, -3); 
    register(email, password, phone, address,country,city,gender,dat);
    // const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            noValidate
             onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                   sx={{ marginBottom: 2}}
                />
              </Grid>
              <Grid   sx={{ marginBottom: 2,marginLeft: 4}}  xs={12} sm={6}>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={gender}
                    onChange={(e) => {setGender(e.target.value)}}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                </FormControl>
              </Grid>
{/* ============================================================ */}
            <Grid  sx={{ marginBottom: 2,marginLeft: 2}}  xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    
                        <DesktopDatePicker
                          label="Date de Naissance"
                          inputFormat="MM/dd/yyyy"
                          value={dat}
                          onChange={handleDate}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    
                </LocalizationProvider>
              </Grid>
{/* ============================================================ */}
     {/*===================country===============================================================================*/}
              <FormControl fullWidth>
                 <InputLabel  sx={{ marginLeft:2}} id="demo-simple-select-label">Votre Pays</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                   sx={{ marginLeft:2}}
                 
                  // className={classes.formControl}
                  value={country1} 
                  onChange={(e) => {setCountry(e.target.value)}}
                  
                 onClick={()=>setallCities([])}
                >  
                 { allCountry?.map((country)=>{
                                           
                       return <MenuItem key={country.isoCode} value={`${country.name}-${country.isoCode}`}>{`${country.name}-${country.isoCode}`}</MenuItem>
                    })}
                </Select>
              </FormControl>
          {/* ================================================= */}
                     <Grid item xs={12} container
                         direction="row"
                         justifyContent="flex-end"
                          alignItems="flex-end">
                          <Button 
                            onClick={handleCities}
                            sx={{ marginBottom:2}}
                          variant="contained">load City</Button>
                     </Grid>                
            {/* ================================================= */}
            <FormControl fullWidth>
                 <InputLabel  sx={{ marginLeft:2}} id="demo-simple-select-label">Votre  Ville</InputLabel>
                <Select
                 sx={{ marginLeft:2}}
                
                  value={city} 
              onChange={(e) => setCity(e.target.value)}   
              required     
              >
              { allCities?.map((c,index)=>{
                                                   
                    return <MenuItem key={c.index} value={c.name}>{c.name}</MenuItem>
               })}
                </Select>
              </FormControl>

              {/*=======================end=============================================================================*/}
              <Grid item xs={12}>
                <TextField
                  required
                  type='number'
                  fullWidth
                  id="phone"
                  label="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
        {/* //=============== password======================= */}
              <Grid item xs={12} >
              <FormControl fullWidth variant="outlined">
               <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>  
                <OutlinedInput
                 id="outlined-adornment-password"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  // type="password"
                  type={showPassword ? 'text' : 'password'}
                  // id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                   onClick={handleClickShowPassword}
                   onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                
                 </IconButton>
              </InputAdornment>
            }
            // label="Password"
      //=================================
                />
              </FormControl>
              </Grid>


              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
