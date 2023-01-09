import React from 'react';

import { TodoList } from './components/TodoList';
import { TodoCounter } from './components/Todocounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './modal';
import { TodoForm } from './components/TodoForm';
import { TodoHeader } from './components/TodoHeader'
import { useTodos } from './hooks/useTodos';
import { TodosError } from './components/TodosError';
import { TodosLoading } from './components/TodosLoading';
import { EmptyTodos } from './components/EmptyTodos';
import { ChangeAlert } from './components/ChangeAlert';

function App() {
  const  {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completeTodos,
    searchValue,
    setSearchValue,
    addTodo,
    synchronizeTodos
    } =  useTodos()
    return (
      <React.Fragment>
        <TodoHeader 
          loading={loading}>
          <TodoCounter
            totalTodos={totalTodos}
            completeTodos={completeTodos}
          />
          <TodoSearch
            //loading={loading}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
    />
        </TodoHeader>
        <div className='flex flex-col justify-center items-center h-screen bg-sky-700 space-y-8 font-bold font-mono'>
            
            <TodoList 
              error={error}
              loading={loading}
              searchedTodos={searchedTodos}
              totalTodos={totalTodos}
              searchText={searchValue}
              onError={()  => <TodosError />}
              onLoading={() => <TodosLoading/>}
              onEmptyTodos={() => <EmptyTodos />}
              onEmptySearchResults={(searchText) => <p>No se encontraron resultados para: {searchText}</p>}
              >
                {todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              )}
            </TodoList>

            {!!openModal && (
              <Modal>
              <TodoForm 
                addTodo={addTodo}
                setOpenModal={setOpenModal}
              />
            </Modal>
            )} 
        <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
        />
                <ChangeAlert 
                  synchronize={synchronizeTodos}
                />
        </div>

      </React.Fragment>
    );
}

export default App;