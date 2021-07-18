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

function Header() {
  const [{ user }, dispatch] = useStateValue();
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
        <div className="header__login">
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
