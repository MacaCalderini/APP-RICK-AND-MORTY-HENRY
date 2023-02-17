import React from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../card/Card";
import { orderCards, filterCards } from "../Redux/Actions";
import s from "./favorite.module.css"

export function Favorites({ myFavorites }) {
  const dispatch = useDispatch();

  function handleClick(e) {
    const { name, value } = e.target;
    if (name === "order") dispatch(orderCards(value));
    if (name === "gender") dispatch(filterCards(value));
  }

  return (
    <div >
      <select name="order" onClick={handleClick}>
        <option value="" disabled>
          Ordenar...
        </option>
        <option value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>
      </select>
      <select name="gender" onClick={handleClick}>
        <option value="" disabled>
          Filtrar...
        </option>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknow</option>
      </select>

      <div className={s.gridCards}>
        {myFavorites.length === 0 ? (
          <p style={{ color: "violet", marginTop: "150px", fontSize: "24px" }}>
            ¡Agrega un favorito!
          </p>
        ) : (
          myFavorites.map((e, i) => (
            <Card
              id={e.id}
              name={e.name}
              species={e.species}
              gender={e.gender}
              image={e.image}
              onClose={true}
              fav={true}
              key={i++}
            />
          ))
        )}
      </div>
    </div>
  );
}
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
