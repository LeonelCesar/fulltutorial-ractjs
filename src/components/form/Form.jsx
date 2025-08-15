import "./form.css";
import { useState } from "react";

function Form() {
  const [score, setScore] = useState("10");
  const [commant, setCommant] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && commant.length <= 10 ) {
      alert("Please provaide explaining why the experience");
      return;
    }
    console.log("Form submited!");
    setScore("10");
    setCommant("");
  };

  return (
    <div className="form">
      <form onSubmit={handlerSubmit}>
        <fieldset className="fieldForem">
          <h2>Feedback Form</h2>
          <div className="Field" />
          <label htmlFor="">Score: {score}</label>
          <input
            type="range"
            min="0"
            max="10"
            onChange={(e) => setScore(e.target.value)}
          />
          <div className="fieldForem">
            <label>Commant: </label>
            <textarea
              value={commant}
              onChange={(e) => setCommant(e.target.value)}
            />
          </div>
          <button type="submit">Submite</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
