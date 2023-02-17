import { useState } from "react";
import styled from "./searchBar.module.css";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    setCharacter(value);
  };

  return (
    <div>
      <input  className={styled.input} type="search" placeholder="Search" onChange={handleChange} />
      <button className={styled.btn} onClick={() => props.onSearch(character)}>
        Add
      </button>
      <button  className={styled.btn}  onClick={props.random}>Random</button>
    </div>
  );
}
