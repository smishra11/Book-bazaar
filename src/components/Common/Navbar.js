import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, Button, Divider, Menu, MenuItem, Tooltip } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      "&:focus": {
        width: "23ch",
      },
    },
  },
}));

export default function SearchAppBar({ count, setCount }) {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  const [uniqueCount, setUniqueCount] = useState(0);

  useEffect(() => {
    let cartData = JSON.parse(localStorage.getItem("cartItem") || "[]");
    const unique = [...new Map(cartData.map((data) => [data.name, data])).values()];
    setUniqueCount(unique.length);
  }, [count]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box sx={{ flexGrow: 1 }}>
            <Box
              sx={{ display: "inline-block", cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <Typography
                variant="h5"
                noWrap
                sx={{
                  fontFamily: "'Pacifico', cursive",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src="/favicon.webp" alt="" height={45} width={45} />
                Book Bazaar
              </Typography>
            </Box>
          </Box>
          <Search sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button href="/books" sx={{ color: "white", textTransform: "none", mx: 1 }}>
              Books
            </Button>
            <Button href="/authors" sx={{ color: "white", textTransform: "none" }}>
              Authors
            </Button>
          </Box>
          <Tooltip title="My account">
            <IconButton sx={{ mx: 1 }} onClick={() => setOpen(true)}>
              <PersonOutlineIcon sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cart">
            <IconButton onClick={() => setCartOpen(true)}>
              <Badge badgeContent={uniqueCount} color="error">
                <ShoppingCartOutlinedIcon fontSize="small" sx={{ color: "white" }} />
              </Badge>
            </IconButton>
          </Tooltip>
          <IconButton
            sx={{ ml: 1, display: { xs: "block", md: "none" } }}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            <MenuOutlinedIcon fontSize="small" sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => navigate("/books")}>Books</MenuItem>
          <MenuItem onClick={() => navigate("/authors")}>Authors</MenuItem>
        </Menu>
      </AppBar>
      <Divider />
      <Login open={open} setOpen={setOpen} />
      <Cart
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        count={count}
        setCount={setCount}
      />
    </Box>
  );
}
