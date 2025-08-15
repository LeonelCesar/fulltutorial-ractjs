import "./cointainmentComponent.css";

const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};

const DeletButton = () => {
  return <Button backgroundColor="red">Delet Massages</Button>;
};

function CointainmentComponent() {
  return (
    <div className="componemtsCointaiment">
      <header>Little Lemon Restaurant</header>
      <Alert>
        <h4>Delet Account</h4>
        <p>
          Are you sure you want to proced? You will miss all your delicious
          recepes!
        </p>
        <DeletButton />
      </Alert>
    </div>
  );
}

export default CointainmentComponent;
