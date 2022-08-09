import React, { useState, useReducer } from "react";

const UseReducerForm = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    cars: [],
    tags: [],
    quantity: 0,
    category: "",
    images: {
      sm: "",
      md: "",
      lg: "",
    },
  });

  return (
    <div>
      <h1>UseReducerForm</h1>
      <form className="form-input">
        <input type="text" placeholder="title" />
        <input type="text" placeholder="description" />
        <input type="text" placeholder="price" />
        <span>category:</span>
        <select name="card" id="cars">
          <option value="sneakers">sneakers</option>
          <option value="t-shirt">shirt</option>
          <option value="jeans">jeans</option>
        </select>
        <span>Tags:</span>
        <textarea
          name="tags"
          id="tags"
          cols="30"
          rows="10"
          placeholder="enter tags and seperate with commas"
        />
        <div className="quanity">
          <button>-</button>
          <span>Quantity ({product.quantity})</span>
          <button>+</button>
        </div>
      </form>
    </div>
  );
};

export default UseReducerForm;
