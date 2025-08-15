import "./sandBox.css";
import { useState } from "react";

function SandBox() {
  const [namePet, setNamePet] = useState("Fiffly");

  function nameLooperName() {
    if (namePet === "Fiffly") {
      setNamePet("Rexot");
    } else if (namePet === "Rexot") {
      setNamePet("Wechirex");
    } else if (namePet === "Weichirex") {
      setNamePet("Fiffly");
    }
  }

  return (
    <div className="petName">
      <h2>I am thinking to my pet name {namePet}</h2>
      <button onClick={nameLooperName}>Change the name of my pet</button>
    </div>
  );
}

export default SandBox;
