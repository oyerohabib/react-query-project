import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increaseCount = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decreaseCount = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <div>
      <h1>UseReducer</h1>
      <div>
        <button onClick={() => decreaseCount()}>-</button>
        <span>{state.count}</span>
        <button onClick={() => increaseCount()}>+</button>
      </div>
    </div>
  );
};

export default UseReducer;
