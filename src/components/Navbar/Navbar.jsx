import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import "../Header/Header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors"; 

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Container className="Header">
        <Content>
          <Link to={"/home"}>
            <img src="./HeaderImg/logo.png" alt="" />
          </Link>

          <Ulist>
            <Link to={"/home"} style={{ textDecoration: "none" }}>
              <li>
                <a href="#">Home</a>
              </li>
            </Link>
            <Link to={"/About"} style={{ textDecoration: "none" }}>
              <li>
                <a href="#">About</a>
              </li>
            </Link>
            <Link to={"/Features"} style={{ textDecoration: "none" }}>
              <li>
                <a href="#">Features</a>
              </li>
            </Link>
            <Link to={"/Help"} style={{ textDecoration: "none" }}>
              <li>
                <a href="#">Help</a>
              </li>
            </Link>
          </Ulist>
        </Content>

        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ bgcolor: deepPurple[1000] }}
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {null}
          </Avatar>
        </Stack>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Link to={"/Profile"}>
            <MenuItem className="MenuItems" onClick={handleClose}>
              Profile
            </MenuItem>
          </Link>
          <Link to={"/"}>
            <MenuItem className="MenuItems" >
              Logout
            </MenuItem>
          </Link>
        </Menu>
        <Outlet />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;
const Ulist = styled.ul`
  text-decoration: none !important;
`;
export default Navbar;
