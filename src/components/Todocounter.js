


function TodoCounter({totalTodos, completeTodos, loading}){
    return(
        <>
        {!!loading && <div> Obteniendo datos..</div>}
        { totalTodos >= 1 && <h2>Completaste {completeTodos} de {totalTodos} tareas</h2>}


        </>
    )
}


export { TodoCounter}