import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, TextField } from "@mui/material";
import "../../css/auth.css";

function Login({ close }) {
  return (
    <div className="auth-container">
      <ClearIcon className="closeBtn" onClick={close} />
      <div className="auth-content">
        <p className="auth-title"> Sign In to Freebeehub</p>
        <div className="auth-form">
          <TextField className="auth-input" label="Phone" variant="standard" />
          <TextField
            className="auth-input"
            label="Password"
            variant="standard"
          />
          <Button variant="contained" className="auth-btn primary-btn">
            Sign In
          </Button>
          <p
            style={{
              //   position: "relative",
              textAlign: "center",
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "grey",
              marginTop: "10px",
              marginBottom: "10px",
              backgroundColor: "white",
            }}
            className="partition"
          >
            OR
          </p>
          <Button variant="outlined" className="sec-btn auth-btn ">
            Create Account
          </Button>

          <p className="forget-password">Forget password?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
