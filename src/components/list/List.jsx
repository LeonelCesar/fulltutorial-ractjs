import "./list.css";

const data = [
  {
    id: 1,
    tags: ["Sócio Maioritário"],
    name: "Rui Andrade Neto",
    description: "Tecnico comercial de compras e vendas",
    photo: "https://avatars.githubusercontent.com/u/149327611?v=4",
    altura: 2.9,
  },
  {
    id: 2,
    tags: ["Responsavél"],
    name: "Clintonb da Costa Sofécia",
    description: "Diretor executivo do facebook",
    photo: "https://avatars.githubusercontent.com/u/149327611?v=4",
    altura: 1.59,
  },
  {
    id: 3,
    tags: ["Tecnico Especializado"],
    name: "António Liquine César",
    description: "Treinador de judo",
    photo: "https://avatars.githubusercontent.com/u/149327611?v=4",
    altura: 1.9,
  },
  {
    id: 4,
    tags: ["Responsavél da plateia"],
    name: "Leonel Helder Costa César",
    description: "Responsável pela tecnologia da empresa",
    photo: "https://avatars.githubusercontent.com/u/149327611?v=4",
    altura: 1.73,
  },
];

const topDessert = data.map((dessert) => {
  return {
    content: `${dessert.description} - ${dessert.name} - ${dessert.tags} -${dessert.photo}`,
    altura: dessert.altura,
  };
});

console.log(topDessert);

function List() {
  return (
    <div className="listDiv">
      <h1>Desplay list with method map no console log</h1>
      <strong>Renderizar uma lista</strong>
    </div>
  );
}

export default List;
