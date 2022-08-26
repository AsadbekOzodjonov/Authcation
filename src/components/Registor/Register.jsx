import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "../Login/Login";
import "./Register.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password)); 
      setLogin(!login);
    }
  }

  return (
    <>
      <Register>
        {login ? (
          <Forms onSubmit={handleFormSubmit}>
            <H3>Register</H3>

            <RegisterForm>
              <TextField
                id="outlined-basic"
                label="Enter Full Name"
                variant="outlined"
                type="text"
                name="name"
                onChange={(event) => setName(event.target.value)}
                className="w-25"
              />
            </RegisterForm>

            <RegisterForm className="registerForm">
              <TextField
                id="outlined-basic"
                label="Enter email"
                variant="outlined"
                type="email"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
                className="w-25"
              />
            </RegisterForm>

            <RegisterForm className="registerForm">
              <TextField
                id="outlined-basic"
                label="Enter password"
                variant="outlined"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                className="w-25"
              />
            </RegisterForm>

            <Button
              variant="contained"
              type="submit"
              className="RegisterBtn w-25"
            >
              Register
            </Button>

            {flag && (
              <Alert color="primary" variant="danger " className="alerts">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
          </Forms>
        ) : (
          <Login />
        )}
      </Register>
    </>
  );
}
const Register = styled.div`
  margin-left: 20%;
  margin-top: 50px;
`;
const Forms = styled.form`
  align-items: center;
`;
const RegisterForm = styled.div`
  margin-bottom: 30px;
  gap: 30px;
  row-gap: 40px;
  align-items: center;
  display: flex;
`;
const H3 = styled.h3`
  margin-bottom: 20px;
`;

export default Registration;
