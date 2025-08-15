import "./useStateHook.css";
import { useState } from "react";

function UseStateHook() {
  const [restaurantNmae, setRestaurantName] = useState("Lemon to change  ");

  const handlerNmaeRestaurant = () => {
    setRestaurantName("A Little Lemon");
  };

  return (
    <div className="usestateHook">
      <h1>My Littele Lemon</h1>
      <h2>{restaurantNmae}</h2>
      <button onClick={handlerNmaeRestaurant}>Update name of Restaurant</button>
    </div>
  );
}

export default UseStateHook;
