import "./spreadOperater.css";

const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "primary" ? "primaryButton" : "secondaryButton"; 
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ children, ...buttonProps }) => {
  return (
    <Button
      type="secondary"
      {...buttonProps}
      onClick={() => {
        console.log("Logging In");
      }}
    >
      {children || "Login"}
    </Button>
  );
};

function SpreadOperater() {
  return (
    <div className="spreadOperetor">
      <h3>Spread Operator</h3>
      <Button
        type="primary"
        onClick={() => {
          console.log("Sign Up");
        }}
      >
        Sign Up
      </Button>
      <LoginButton
        onClick={() => {
          console.log("Logging In");
        }}
      >
        Login In
      </LoginButton>
    </div>
  );
}

export default SpreadOperater;
