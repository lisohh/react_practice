import React from "react";

function Menu({ flavor, description, image, alt }) {
  return (
    <article className="menu">
      <img className="image" src={image} alt={alt} />
      <h3>{flavor}</h3>
      <p>{description}</p>
    </article>
  );
}

export default Menu;
