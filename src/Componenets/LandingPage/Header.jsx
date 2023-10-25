import React from "react";
import Logo from "/home/mehab2/EShopping/src/Assets/Icons/Untitled-1-01_Cropped.png";
import "/home/mehab2/EShopping/src/Styles/Header.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleOutlined';
export default function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <img src={Logo} alt=""></img>
      </div>

      <div className="Left">
        <h2>Men</h2>
        <h2>Women</h2>
        <h2>Kids</h2>
        <h2>About Us</h2>
      </div>

      <div className="Right">
        <TextField
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <ShoppingCartOutlinedIcon className="Generic_Icon" sx={{ fontSize: 30 }}/>
        <AccountCircleRoundedIcon className="Generic_Icon" sx={{ fontSize: 30 }}/>
      </div>
    </div>
  );
}
