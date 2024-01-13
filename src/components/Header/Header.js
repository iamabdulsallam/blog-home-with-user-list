import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  List,
  ListItem,
  Skeleton,
  TextField,
} from "@mui/material";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
const navItems = [
  { route: "/", title: "Home" },
  { route: "/my-articles", title: "My Articles" },
];
const Header = () => {
  const location = useLocation();
  const isLinkActive = (to) => {
    return location.pathname === to;
  };
  return (
    <Box className="header-container">
      <nav className="header-nav">
        <Link to="/">
          <Skeleton
            variant="circular"
            animation={false}
            width={40}
            height={40}
          />
        </Link>
        <List className="header-nav-list">
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <Link
                className={isLinkActive(item.route) ? "active" : ""}
                to={item.route}
              >
                {item.title}
              </Link>
            </ListItem>
          ))}
        </List>
        <Box className="header-action-wrapper">
          <TextField
            className="header-search-field"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            disableRipple={true}
            className="btn btn-black"
            variant="contained"
          >
            Create Article
          </Button>
          <Skeleton
            variant="circular"
            animation={false}
            width={40}
            height={40}
          />
        </Box>
      </nav>
    </Box>
  );
};

export default Header;
