



import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./ForgotPassword.css";
import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";

function ForgotPassword() {
 
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
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              RESET PASSWORD
            </Typography>
            <p className="div-p1">The verification email will be sent to the mailbox.Please Check it.</p>
            
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
            <div className="div-button">
              <Button
                variant="contained"
                sx={{ justifyContent: "center", m: 1, }}
              >
                Reset Password
              </Button>
            </div>
            
           </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default ForgotPassword;
