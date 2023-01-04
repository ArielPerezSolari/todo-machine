import { useContext } from "react"
import { TodoContext } from "../context"


function TodoCounter(){
    const {totalTodos, completeTodos} = useContext(TodoContext)
    return(
        <>
        { totalTodos >= 1 && <h2>Completaste {completeTodos} de {totalTodos} tareas</h2>}
        { totalTodos === 0 && <h2>No tienes tareas pendientes, agrega alguna!</h2>}
        </>
    )
}


export { TodoCounter}