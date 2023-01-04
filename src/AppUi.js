import React, { useContext } from 'react';
// Importamos nuestro contexto
import {TodoList} from './components/TodoList';
import {TodoCounter} from './components/Todocounter'
import {TodoSearch} from './components/TodoSearch'
import { TodoContext } from './context/index.js'
import {TodoItem} from './components/TodoItem'
import {CreateTodoButton} from './components/CreateTodoButton';
import { Modal } from './modal';
import { TodoForm } from './components/TodoForm';
function AppUI() {

  const  {error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal} =  useContext(TodoContext)
    return (
      <React.Fragment>
        <div className='flex flex-col justify-center items-center h-screen bg-sky-700 space-y-8 font-bold font-mono'>
        <TodoCounter />
        <TodoSearch />
            <TodoList className="font-bold">
              {error && <p>Desespérate, hubo un error...</p>}
              {loading && <p>Estamos cargando, no desesperes...</p>}
              {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
              
              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
            {!!openModal && (
              <Modal>
              <TodoForm />
            </Modal>
            )}
        <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
        />
        </div>
      </React.Fragment>
    );
  }
  
  export { AppUI };