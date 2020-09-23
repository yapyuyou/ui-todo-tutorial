import React, { useContext, useEffect, useState } from "react";
import { Button } from "antd";
import { TodoContext } from "../context/TodoContextProvider";
import { todoReducer } from "../context/todo.reducer";
import { SET_TODOS, setTodos } from "../context/todo.actions";
import { firebaseApi } from "../services/firebaseApi";

const TodoTask = (props) => {
  const [inputValue, setInputValue] = useState("lel");
  return (
    <div className="todo-task">
      <div className="todo-task__name"
      data-cy="todo-task__name"
      contentEditable="true"
      onChange={({ target: { value } }) => setInputValue(value)}
      >
        {props.description}
      </div>
      <Button
        type="primary"
        shape="round"
        className="todo-task__button"
        data-cy="todo-task__button-update"
        onClick={() => {props.update(props.id, inputValue)}}
      >
        Update
      </Button>
      <Button
        type="primary"
        shape="round"
        className="todo-task__button"
        data-cy="todo-task__button-delete"
        onClick={() => props.delete(props.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export const TodoList = () => {
  const { state } = useContext(TodoContext);
  const { dispatch } = useContext(TodoContext);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await firebaseApi.fetchTodos();
      dispatch(setTodos(todos));
    }

    fetchTodos();
  }, [dispatch]);

  const handleDeleteTodo = async (id) => {
    firebaseApi.deleteTodo(id);
    const todos = await firebaseApi.fetchTodos();
    dispatch(setTodos(todos));
  };

  const handleUpdateTodo = async (id, description) => {
    firebaseApi.updateTodo(id, description);
    const todos = await firebaseApi.fetchTodos();
    dispatch(setTodos(todos));
  };

  return (
    <div className="todo-list" data-cy="todo-list">
      {Object.entries(state.todos).map(([id, todo]) => (
        <TodoTask
          key={id}
          description={todo.description}
          delete={handleDeleteTodo}
          update={handleUpdateTodo}
          id={id}
        />
      ))}
    </div>
  );
};
