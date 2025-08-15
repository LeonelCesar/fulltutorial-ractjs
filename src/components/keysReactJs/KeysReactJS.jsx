import "./keysReactJS.css";
import { useState } from "react";

const Todo = (props) => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

function KeysReactJS() {
  const [todo, setTodo] = useState([
    {
      id: "Todo 1",
      createdAt: "10:45",
    },
    {
      id: "Todo 2",
      createdAt: "20:00",
    },
  ]);

  const reverseOrder = () => {
    setTodo([...todo].reverse());
  };

  return (
    <div className="keysReactElemnt">
      <h2>Keys in ReactJS</h2>
      <button onClick={reverseOrder}>Reverse Activity</button>
      {todo.map((todo, index) => (
        <Todo key={index} id={todo.id} createdAt={todo.createdAt} />
      ))}
    </div>
  );
}

export default KeysReactJS;
