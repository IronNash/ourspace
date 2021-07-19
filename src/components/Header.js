import React from "react";
import "../styles/Header.css";
import logo from "../logo.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import RssFeedOutlinedIcon from "@material-ui/icons/RssFeedOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import SettingsIcon from "@material-ui/icons/Settings";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Header() {

  const [{ user }, dispatch] = useStateValue();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogoff = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="logo" />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Ourspace" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <RssFeedOutlinedIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <div className="header__icon">
        <IconButton>
          <AddIcon />
        </IconButton>
        </div>
        <div className="header__icon">
        <IconButton>
          <ForumIcon />
        </IconButton>
        </div>
        <div className="header__icon">
        <IconButton>
          <SettingsIcon />
        </IconButton>
        </div>
        <div className="header__logoff">
        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <ExpandMoreIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogoff}>Logout</MenuItem>
        </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
