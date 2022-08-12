import React, { useReducer, useState } from "react";
import TodoList from "./TodoList";

export const ACTIONS = {
  ADDTODO: "addTodo",
  TOGGLETODO: "toggleTodo",
  DELETETODO: "deleteTodo"
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADDTODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLETODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELETETODO:
      return todos.filter((todo) => todo.id !== action.payload.id)

    default:
      return todos;
  }
}

const newTodo = (name) => {
  return {id: Date.now(), name: name, complete: false}
}

const Todo = () => {
  const [name, setName] = useState("");

  const [todos, dispatch] = useReducer(reducer, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADDTODO, payload: {name: name} })
    setName("")
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="please enter a todo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <TodoList todo={todo} key={todo.id} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default Todo;
