

function TodoList(props){
    return(
        <section className="flex flex-col justify-center items-center">
            <h3 className="mb-3.5">Tareas restantes:</h3>
            <ul className="space-y-10">
                {props.children}
            </ul>
        </section>
    );
}

export default TodoList