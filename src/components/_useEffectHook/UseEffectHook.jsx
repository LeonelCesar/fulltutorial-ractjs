import "./useEffectHook.css";
import { useState, useEffect } from "react";

function UseEffectHook() {
  const [taggle, setTaggle] = useState(false);

  function taggleHandler() {
    setTaggle(!taggle);
  }

  useEffect(() => {
    document.title = taggle ? "Well Come to a little lemon" : "Using the useEffect Hook";
  }, [taggle]);

  return (
    <div className="useeffecthook">
      <h2>Using the UseEffect Hook</h2>
      <button onClick={taggleHandler}>Taggle massage in the browser</button>
      {taggle && <h3>Well come to a little lemon</h3>}
    </div>
  );
}

export default UseEffectHook;
