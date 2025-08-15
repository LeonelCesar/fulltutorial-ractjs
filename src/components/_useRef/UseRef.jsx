import './useRef.css';
import { useRef } from "react";

function UseRef() {
  const formInputRef = useRef(null);

  const foucosInput = () => {
    formInputRef.current.focus();
  };

  return (
    <div className="userefe">
      <h2>Using useRef to access underlying DOM</h2>
      <input ref={formInputRef} type="text" />
      <button onClick={foucosInput}>focus input</button>
    </div>
  );
}

export default UseRef;
