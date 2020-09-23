import { Button, Input } from "antd";
import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { setTodos } from "../context/todo.actions";
import { TodoContext } from "../context/TodoContextProvider";
import { firebaseApi } from "../services/firebaseApi";

export const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleAddClick = async () => {
    const id = uuidv4();
    firebaseApi.addTodo(id, inputValue);
    const todos = await firebaseApi.fetchTodos();
    dispatch(setTodos(todos));
    setInputValue("")
  }

  return (
    <div className="todo-input">
      <Input
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
        placeholder="Add a TODO"
        size="large"
        className="todo-input__input"
        data-cy="todo-input__input"
      />
      <Button
        type="primary"
        shape="round"
        onClick={handleAddClick}
        className="todo-input__button"
        data-cy="todo-input__button"
      >
        Add
      </Button>
    </div>
  );
};
