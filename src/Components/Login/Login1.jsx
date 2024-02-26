

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./Login1.css";
import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  Checkbox,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGooglePlus,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login1() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  return (
    <div className="section-div">
      <Card
        className="section-card"
        sx={{
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          background: "white",
          opacity: "0.8",
          backgroundSize: "cover",
          position: "absolute",
        }}
      >
        <CardContent>
          <Box
            sx={{
              m: 8,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography className="card-heading"
              sx={{
                color: "#404040",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
               
              }}
            >
              WELCOME TO ANOVIP
            </Typography>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
              <Input
                id="standard-adornment-email"
                type="email"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="envelop"></IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Checkbox />
            Remember me
            <br />
            <p className="div-p">forgot your password?</p>
            <div className="div-button">
              <Button
                variant="contained"
                sx={{ justifyContent: "center", m: 1, }}
              >
                LogIn
              </Button>
            </div>
            <p className="div-p1">or login with</p>
            <hr />
            {/* <Button variant="contained" sx={{justifyContent:'center', m: 1, borderRadius:'100%'}}></Button>
             */}
            
            <div className="div-fontawesome">
              <FontAwesomeIcon icon={faGoogle} size="2x" style={{marginRight:'8px'}}/>
              <FontAwesomeIcon icon={faFacebook} size="2x" style={{marginRight:'8px'}}/>
              <FontAwesomeIcon icon={faGooglePlus} size="2x" style={{marginRight:'8px'}} />
              <FontAwesomeIcon icon={faTwitter} size="2x" style={{marginRight:'8px'}}/>
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{marginRight:'8px'}}/>
            </div>
            <p className="div-p1" style={{marginTop:'10px', color:'blue'}} >Don't have account? Register Here</p>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login1;
