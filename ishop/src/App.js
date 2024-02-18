import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { nanoid } from "nanoid";
import Items from "./components/Items";

const arrItems = [
  {
    id: nanoid(),
    title: 'Cтул зеленый',
    img: 'chair.jpg',
    desc: 'Стул зеленый с обивкой из материи',
    category: 'chairs',
    price: '5 000'
  },
  {
    id: nanoid(),
    title: 'Кресло амортизирующее',
    img: 'armchair.jpg',
    desc: 'Серое кресло с амортизирующей опорой, с обивкой из материи',
    category: 'armchairs',
    price: '15 000'
  },
  {
    id: nanoid(),
    title: 'Стол круглый',
    img: 'table.jpg',
    desc: 'Стол круглый бежевый',
    category: 'table',
    price: '12 000'
  },
  {
    id: nanoid(),
    title: 'Диван серо-синий',
    img: 'sofa.jpg',
    desc: 'Диван серо-синий с обивкой из материи',
    category: 'sofa',
    price: '40 000'
  },
  {
    id: nanoid(),
    title: 'Шкаф кухонный',
    img: 'closet.jpg',
    desc: 'Шкаф кухонный белый',
    category: 'closet',
    price: '20 000'
  },
  {
    id: nanoid(),
    title: 'Тумба',
    img: 'amber.jpg',
    desc: 'Тумба для обуви светлая',
    category: 'amber',
    price: '7 000'
  },
];

function App() {
  const [items, setItems] = useState(arrItems);

  return (
    <div className="wrapper">
      <Header />
      <Items items={items} />
      <Footer />
    </div>
  );
}

export default App;
