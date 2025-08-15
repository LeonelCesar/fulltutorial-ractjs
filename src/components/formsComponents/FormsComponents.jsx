import "./formsComponents.css";
import { useState } from "react";

function FormsComponents() {
  const [name, setName] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Eloa Maria Brito César");
  };

  return (
    <div className="formComponentsReactjs">
      <form onSubmit={handlerSubmit}>
        <fieldset>
          <h2>Forms in React JS and controlled components</h2>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type="submit">
            Submit onchenfre
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default FormsComponents;
