import React, { useReducer } from "react";

const ACTIONS = {
  ADDITEM: "ADDITEM",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADDITEM:
      return {
        ...state,
        [action.field]: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
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
};

const UseReducerForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADDITEM",
      field: e.target.name,
      payload: e.target.value,
    });
    alert("form submitted");
  };

  return (
    <div>
      <h1>UseReducerForm</h1>
      <form className="form-input" onSubmit={handleSubmit}>
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
          <span>Quantity ({state.quantity})</span>
          <button>+</button>
        </div>
      </form>
    </div>
  );
};

export default UseReducerForm;
