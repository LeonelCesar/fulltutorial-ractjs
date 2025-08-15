import "./useReducerHook.css";
import { useReducer } from "react";

const reducer = (state, action) => { 
    if (action.type === 'buy_ingredients') return {money: state.money - 10};
    if (action.type === 'sell_a_meal') return {money: state.money + 10};
    if (action.type === 'custmar_plus_come in') return {money: state.money + 5000};
    return state;
}

function UseReducerHook() {
    const initialState = {money: 100};
    const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <div className="userreducerhook">
      <h2>User Reducer Hook</h2>
      <h3>Wallet: {state.money}</h3>
      <button onClick={() => dispatch({type: 'buy_ingredients'})}>Shopping for veggies</button>
      <button onClick={() => dispatch({type: 'sell_a_meal'})}>Serve to the customer</button>
      <button onClick={() => dispatch({type: 'custmar_plus_come in'})}>Custumer come in</button>
    </div>
  );
}

export default UseReducerHook;
