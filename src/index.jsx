import ReactDOM from "react-dom";
import React, { useState } from "react";
import Menu from "./Menu";
import Item from "./Item";
import Modal from "./Modal";

function App() {
  const [menuList, setMenuList] = useState([
    {
      flavor: "바닐라 🥞",
      description: "클래식은 영원하다!",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371",
      alt: "Vanila",
    },
    {
      flavor: "초코 🍫",
      description: "바닐라의 라이벌",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
      alt: "Choco",
    },
    {
      flavor: "순수우유 🥛",
      description: "담백하고 고소한 맛",
      image: "https://images.unsplash.com/photo-1555844169-6b0231154135",
      alt: "Milk",
    },
    {
      flavor: "말차 🍵",
      description: "여름엔 시원한 말차",
      image: "https://images.unsplash.com/photo-1534706936160-d5ee67737249",
      alt: "Malcha",
    },
    {
      image: "https://images.unsplash.com/photo-1556909044-5c0e1da96641",
      alt: "Strawberry",
      flavor: "딸기 🍓",
      description: "봄에는 역시 딸기!",
    },
  ]);

  function addMenu(newMenu) {
    setMenuList((old) => [...old, newMenu]);
  }

  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <header>
        <h3 className="title">
          Apopo's <br />
          🤎 Favorite Icecream Flavors 🤎
        </h3>
      </header>
      <main>
        <Menu open={open} />
        <div className="items">
          {menuList.map((menu) => (
            <Item {...menu} />
          ))}
        </div>
      </main>
      <Modal addMenu={addMenu} isOpen={isOpen} close={close} />
      <footer>
        <h6 className="author">lisoh 2022 @ GRJ Study</h6>
      </footer>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
