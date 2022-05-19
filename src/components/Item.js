import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [isOn, setIsOn] = useState(false);

  function addToCart() 
  {
    setIsOn((isOn) => !isOn);
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className= {isOn ? "in-cart" : "add"}>{isOn ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
