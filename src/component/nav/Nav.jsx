import React from "react";
import SearchBar from "./../search/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={style.container}>
      <Link className={style.link} to="/home">
        Home
      </Link>

      <Link className={style.link} to="/about">
        About
      </Link>

      <Link className={style.link} to="/Favorite">
        Favorite
      </Link>
      
      <Link className={style.link} to="/">
        Logout
      </Link>

      <SearchBar onSearch={props.onSearch} random={props.random} />
    </div>
  );
}
