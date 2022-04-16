import React from "react";

function Menu({ open }) {
  return (
    <nav className="menu" id="menu">
      <button onClick={open} type="button" className="addButton" id="addItem">
        추가
      </button>
      <br />
      <a>바닐라 🥞</a>
      <a>초코 🍫</a>
      <a>순수우유 🥛</a>
      <a>말차 🍵</a>
      <a>딸기 🍓</a>
    </nav>
  );
}

export default Menu;
