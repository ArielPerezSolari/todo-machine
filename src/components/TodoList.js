

function TodoList(props){
    return(
        <section className="flex flex-col justify-center items-center">
            <h3 className="mb-3.5">Tareas pendientes: </h3>
            <ul className="space-y-10">
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList}