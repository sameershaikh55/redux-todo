import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, INCOMPLETE_TODO } from "./types";

// ADD NEW TO-DO
export const add = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

// DELETE TO-DO
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

// COMPLETE TO-DO
export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};

// INCOMPLETE TO-DO
export const incompleteTodo = (id) => {
  return {
    type: INCOMPLETE_TODO,
    payload: id,
  };
};
