import "./propsStates.css";

const LoggedeInuser = () => {
  return (
    <h3>
      Hello <span className="userName"></span>
    </h3>
  );
};

const Page = () => {
  return (
    <div>
      <h2>What is lorem ipsom?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        aspernatur eaque molestias quidem sint, mollitia totam quia perferendis
        sequi esse, quisquam eveniet possimus magni adipisci eum quasi a numquam
        nobis!
      </p>
      <p>Write by:</p>
    </div>
  );
};

function PropsStates() {
  return (
    <header className="propsStates">
      <h2>Global State</h2>
      <LoggedeInuser />
      <Page />
    </header>
  );
}

export default PropsStates;
