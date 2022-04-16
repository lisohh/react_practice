import ReactDOM from "react-dom";
import React, { useState } from "react";
import AddButton from "./AddButton";
import Flavor from "./Flavor";
import Menu from "./Menu";
import Modal from "./Modal";
import menu from "/public/assets/menu";

function App() {
  const [menuList, setMenuList] = useState(menu);

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
        <nav className="flavor">
          <AddButton open={open} />
          {menuList.map((menu) => (
            <Flavor {...menu} />
          ))}
        </nav>
        <div className="menus">
          {menuList.map((menu) => (
            <Menu {...menu} />
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
