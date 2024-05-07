import { useState, useEffect } from "react";
import "./DisplayCharacters.css";

const DisplayCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // This is going to run only when the component is mounted
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="card-container">
      {characters.map((character) => {
        return (
          <div key={character.id} className="card">
            <img className="spin" src={character.image} alt={`${character.name} image`} />
            <p>{character.name}</p>
          </div>
        );
      })}
    </section>
  );
};

export default DisplayCharacters;
