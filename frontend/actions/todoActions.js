import uuidGenerator from './../utils/uuidGenerator';
import {VISIBLE_FILTER, ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO} from '../constants/TodoConstants';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: uuidGenerator(),
    completed: false,
    startTime: new Date(),
    text
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}

export const setVisibleFilter = (filter) => {
  return {
    type: VISIBLE_FILTER,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const editTodo = (id, text) => {
  return {
    type: EDIT_TODO,
    id,
    text
  }
}