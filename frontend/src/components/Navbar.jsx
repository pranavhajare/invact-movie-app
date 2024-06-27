import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Watched", path: "/watched-movies" },
  { label: "Unwatched", path: "/unwatched-movies" },
];

const Navbar = ({ handleOpenAddMovie }) => {
  const [hamburger, setHamburger] = useState(null);
  const location = useLocation();
  const showAddMovieButton =
    !location.pathname.includes("/watched") &&
    !location.pathname.includes("/unwatched");

  const handleMenuOpen = (event) => {
    setHamburger(event.currentTarget);
  };

  const handleMenuClose = () => {
    setHamburger(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          height: 64,
          backgroundColor: "rgba(18,18,18,1)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, display: "flex", color: "#F5C518" }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#F5C518",
                marginLeft: "40px",
                fontSize: "24px",
                fontWieght: "600",
              }}
            >
              Home
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={hamburger}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(hamburger)}
              onClose={handleMenuClose}
            >
              {navItems.map((item) => (
                <MenuItem key={item.label} onClick={handleMenuClose}>
                  <Link to={item.path} style={{ color: "inherit" }}>
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
              {showAddMovieButton && (
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    handleOpenAddMovie();
                  }}
                >
                  Add Movie
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.label} sx={{ color: "#F5C518" }}>
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
            {showAddMovieButton && (
              <Button
                sx={{
                  color: "Black",
                  backgroundColor: "#F5C518",
                  border: "1px solid black",
                  "&:hover": {
                    backgroundColor: "#d9ac09",
                    color: "black",
                  },
                }}
                onClick={handleOpenAddMovie}
              >
                Add Movie
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
