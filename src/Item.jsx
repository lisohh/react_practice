import React from "react";

function Item({ flavor, description, image, alt }) {
  return (
    <article className="item">
      <img className="image" src={image} alt={alt} />
      <h3>{flavor}</h3>
      <p>{description}</p>
    </article>
  );
}

export default Item;
