import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';



function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    synchronizeItem : synchronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = useState(false)

  const completeTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text, setOpenModal) => {
    const newTodos = [...todos]
    if(text.length > 0){
    newTodos.push({
      completed: false,
      text,
    })
    saveTodos(newTodos)
    
  }
}
  const states = {
    loading,
      error,
      totalTodos,
      completeTodos,
      searchValue,
      openModal,
      searchedTodos,
  };

  const stateUpdaters = {
    setSearchValue,  
      completeTodo,
      deleteTodo,
      setOpenModal,
      saveTodos,
      addTodo,
      synchronizeTodos
  }

  return {states, stateUpdaters}
}

export { useTodos };