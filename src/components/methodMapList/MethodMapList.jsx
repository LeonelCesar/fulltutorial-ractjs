import { id } from "date-fns/locale";
import "./methodMapList.css";

const methodMapListArray = [
  {
    id: 1,
    tags: "especial",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    photo: "https://avatars.githubusercontent.com/u/149327611?v=4",
    price: 5.95,
  },
  {
    id: 2,
    tags: "super-especial",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    photo: "https://avatars.githubusercontent.com/u/149327611?v=4",
    price: 45.67,
  },
  {
    id: 3,
    tags: "especial-alcoólico",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    photo: "https://avatars.githubusercontent.com/u/149327611?v=4",
    price: 23.9,
  },
];

function MethodMapList() {
  return (
    <div className="methodmaplistEvent">
      <h2>Transformar lista de elemento no reactJS</h2>
      <div>
        {methodMapListArray.map((index) => (
          <li key={id}>
            {index.name}
            {index.description}
            {index.price}
          </li>
        ))}
      </div>
    </div>
  );
}

export default MethodMapList;
