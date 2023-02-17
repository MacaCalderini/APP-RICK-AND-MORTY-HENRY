import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import s from "./Detail.module.css";

export default function Detail() {
  const { detailId } = useParams();

  const [character, setCharacter] = useState([]);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/home");
  };
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={s.container}>
      <div className={s.containerCard}>
        <div className={s.atributo}>
          <h4>Nombre: {character.name}</h4>

          <h4>Status: {character.status}</h4>
          <h4>Especie: {character.species}</h4>
          <h4>Genero: {character.gender}</h4>
          <h4>Origin: {character.origin?.name}</h4>
        </div>
        <div>
          <img className={s.img} src={character.image} alt={character.name} />
        </div>
        
      </div>
      <button className={s.backBtn} onClick={handleBack}>
        Go back to Home
      </button>

    </div>
  );
}
