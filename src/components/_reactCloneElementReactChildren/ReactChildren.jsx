import React from "react";
import "./reactChildren.css";

const Row = ({ children, spacing }) => {
  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: { 
            ...child.props.style, // Agora pegamos o estilo correto
            ...(index > 0 ? { marginLeft: `${spacing}px` } : {}), // Aplicamos o espaçamento corretamente
          }
        });
      })}
    </div>
  );
};

function ReactChildren() {
  return (
    <div className="reactchildren">
      <h3>React CloneElement and ReactJS Children</h3>
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>16:45</p>
        <p>Leonel Helder</p>
      </Row>
    </div>
  );
}

export default ReactChildren;
