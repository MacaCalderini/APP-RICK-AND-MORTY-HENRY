import Card from "../card/Card";
import styled from "./cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styled.container}>
      {characters.map((e) => (
        <Card
          key={e.name}
          name={e.name}
          species={e.species}
          gender={e.gender}
          image={e.image}
          id = {e.id}
          onClose={props.onClose}
        />
      ))}
    </div>
  );
}
