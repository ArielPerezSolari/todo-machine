

import TodoCounter from './components/Todocounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';


const todos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:true}
];

function App() {
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen bg-sky-700 space-y-8'>
    <TodoCounter />
    <TodoSearch />
    <TodoList>
      {todos.map(todo => {
        return(
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        )
      })}
    </TodoList>
    <CreateTodoButton />
    </div>
    </>
  );
}

export default App;
