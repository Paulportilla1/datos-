/*import React, { useState } from 'react';
import './App.css';

export default function EmojiIncrementor() {
  const [emojiString, setEmojiString] = useState("🐶");

  const addDogEmoji = () => {
    setEmojiString(prevEmoji => prevEmoji + "🐶");
  };

  const addCatDinosaurEmoji = () => {
    setEmojiString(prevEmoji => prevEmoji + "🐈🦖");
  };

  const addSkullEmoji = () => {
    setEmojiString(prevEmoji => prevEmoji.substring(2));
  };

  return (
    <>
      <h1>{emojiString}</h1>
      <div className="button-container">
        <button onClick={addDogEmoji} className="emoji-button"> Dog🐶</button>
        <button onClick={addCatDinosaurEmoji} className="emoji-button"> Cat & Dinosaur🦖🐈</button>
        <button onClick={addSkullEmoji} className="emoji-button">DELETE</button>
      </div>
    </>
  );
}*/




import React, { useState } from "react";



export default function CharacterStarts() {
  const [character, setCharacter] = useState({
    name: 'Gandalf',
    strength: 10,
    intelligence: 18,
    charisma: 16
  });

  function handleChange(e: { target: { name: any; value: any; }; }) {
    const { name, value } = e.target;

    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: name === "name" ? value : parseInt(value, 10) || 0,
    }));
  }

  function handleSave() {
    // Aquí puedes implementar la lógica de guardado, por ejemplo, enviar los datos a un servidor o almacenar en el estado global
    console.log("Personaje guardado:", character);
    // Puedes agregar una lógica adicional aquí según tus necesidades
  }

  return (
    <div>
      <label>
        Name:
        <input
          name="name"
          value={character.name}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Strength:
        <input
          name="strength"
          value={character.strength}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Intelligence:
        <input
          name="intelligence"
          value={character.intelligence}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Charisma:
        <input
          name="charisma"
          value={character.charisma}
          onChange={handleChange}
        />
      </label>

      <br />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
}
