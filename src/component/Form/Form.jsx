import React, { useState } from "react";
import { validate } from "./validation";
import s from "./Form.module.css";
import sbtn from "../search/searchBar.module.css"

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validate({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  return (
    <div className={s.divPrincipal}>
      <div className={s.letra}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Username: </label>
            <input
              type="text"
              name="username"
              placeholder="Username.."
              onChange={handleInput}
            />
          </div>

          <div>
            <label htmlFor="">Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Password.."
              onChange={handleInput}
            />
          </div>

          <button className={sbtn.btn} type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}
