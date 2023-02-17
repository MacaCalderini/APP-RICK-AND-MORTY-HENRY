import styled from "./card.module.css";
import { Link  } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../Redux/Actions";
import { connect } from "react-redux";
import { useEffect,useState } from 'react';



export function Card(props) {

  
  const [isFav, setIsFav] = useState(props.fav);

  useEffect(() => {
    props.myFavorites &&
      props.myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
  }, [props.myFavorites]);


  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite({
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image,
        id: props.id,
      });
    }
  }



  return (
    <div className={styled.card}>
      
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      
      <button 
      className={styled.btn} 
      onClick={() => props.onClose(props.id)}>
        X
      </button>

      <div>
        <Link to={`/detail/${props.id}`}>
          <h1>{props.name}</h1>
        </Link>
      </div>

      <img className={styled.img} src={props.image} alt={props.name} />

      <div className={styled.genderSpecies}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>



    </div>
  );
}

const mapStateToProps= (state) =>{
  return{
     myFavorites: state.myFavorites,
  }
}
const mapDispatchToProps=(dispatch) =>{
  return{
     addFavorite: function(character){
       dispatch(addFavorite(character))
     },
     deleteFavorite: function(id){
       dispatch(deleteFavorite(id))
     },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
