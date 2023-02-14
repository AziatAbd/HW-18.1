import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActionTypes } from "../../store/todo/todoReducer";

const TodoList = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const dispatch = useDispatch();

  const changeEditValue = (e) => {
    setEditValue(e.target.value);
  };

  const deleteHandler = () => {
    dispatch({ type: todoActionTypes.DELETE_TODO, payload: todo.id });
  };

  const toggleTodoHandler = () => {
    dispatch({ type: todoActionTypes.COMPLETE_TODO, payload: todo.id });
  };

  const editTodoHandler = () => {
    dispatch({
      type: todoActionTypes.EDIT_TODO,
      id: todo.id,
      value: editValue,
    });
    setIsEditing(false);
  };

  const editHandler = () => {
    setIsEditing(true);
    setEditValue(todo.title);
  };

  return (
    <StyledLi>
      {isEditing ? (
        <>
          <input type="text" value={editValue} onChange={changeEditValue} />
          <button onClick={editTodoHandler}>save</button>
        </>
      ) : (
        <>
          <Title done={todo.completed}>{todo.title}</Title>
          <button onClick={deleteHandler}>delete</button>
          <button onClick={toggleTodoHandler}>completed</button>
          <button onClick={editHandler}>edit</button>
        </>
      )}
    </StyledLi>
  );
};

export default TodoList;

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.span`
  text-decoration: ${(props) => (props.done ? "line-through" : "")};
`;
