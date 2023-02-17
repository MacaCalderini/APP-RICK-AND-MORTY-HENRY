import "./App.css";
import React from "react";
import Cards from "./component/cards/Cards";
import tituloImg from "./img/letra.png";
import Nav from "./component/nav/Nav";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./component/about/About";
import Detail from "./component/detail/Detail";
import Form from "./component/Form/Form";
import Favorites from "./component/Favorite/Favorites"


function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = "email@henry.com";
  const password = "Henry123";

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((e) => e.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje ya existe!");
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
    
  function random() {
    let randomId = Math.floor(Math.random() * 826);
    console.log(randomId);
    onSearch(randomId);
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <img className="img" src={tituloImg} alt="RICK & MORTY"></img>

      {location.pathname !== "/" && <Nav onSearch={onSearch} random={random}/>}

      <Routes>
        <Route exact path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
