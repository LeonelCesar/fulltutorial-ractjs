import { useEffect, useState } from "react";
import "./renderProps.css";

const DataFetchear = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desert")) {
      setData(["cake", "ice crem", "salad fruit", "banana"]);
    } else {
      setData(["water", "soda", "juice", "lemonada"]);
    }
  }, []);

  return render(data);
};

const DesertCount = () => {
  return (
    <DataFetchear
      url="http://littlelemon/desert"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinkCount = () => {
  return (
    <DataFetchear
      url="http://littlelemon/drink"
      render={(data) => <h3>{data.length} drink</h3>}
    />
  );
};

function RenderProps() {
  return (
    <div className="renderProps">
      <strong>Render Props</strong>
      <DesertCount />
      <DrinkCount />
    </div>
  );
}

export default RenderProps;
