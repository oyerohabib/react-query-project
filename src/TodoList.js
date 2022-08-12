import React from 'react'
import { ACTIONS } from './Todo';

const TodoList = ({ todo, dispatch }) => {
  return (
    <div>
      <span style={{color: todo.complete ? "#AAA" : "#000"}}>{todo.name}</span>
      <button onClick={() => dispatch({type: ACTIONS.TOGGLETODO, payload: {id: todo.id}})}>toggle</button>
      <button onClick={() => dispatch({type: ACTIONS.DELETETODO, payload: {id: todo.id}})}>delete</button>
    </div>
  );
};

export default TodoList