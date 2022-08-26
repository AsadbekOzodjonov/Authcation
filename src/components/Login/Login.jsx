import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import "./Login.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    } 
  }
  return (
    <LoginAll>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <LoginForm>
            <TextField
              id="outlined-basic"
              label="Enter email"
              variant="outlined"
              type="email"
              onChange={(event) => setEmaillog(event.target.value)}
              className="w-25"
            />
          </LoginForm>

          <LoginForm>
            <TextField
              id="outlined-basic"
              label="Enter password"
              variant="outlined"
              type="password"
              onChange={(event) => setPasswordlog(event.target.value)}
              className="w-25"
            />
          </LoginForm>

          <Button variant="contained" type="submit" className="w-25">
            Login
          </Button>

          {flag && (
            <Alert color="primary" variant="warning" className="alerts">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </LoginAll>
  );
}

const LoginAll = styled.div`
  margin-left: 20%;
`;
const LoginForm = styled.form`
  row-gap: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
`;
export default Login;
