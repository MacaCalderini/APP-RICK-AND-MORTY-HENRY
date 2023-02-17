import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


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
    <div>
      <div>
        <h3>Nombre: {character.name}</h3>
        <h5>Status: {character.status}</h5>
        <h5>Especie: {character.species}</h5>
        <h5>Genero: {character.gender}</h5>
        <h5>Origin: {character.origin?.name}</h5>
      </div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <button onClick={handleBack}>Go back to Home</button>;
    </div>
  );
}
