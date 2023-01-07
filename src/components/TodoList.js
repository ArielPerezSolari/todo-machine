

function TodoList(props){
    const renderFunction = props.render || props.children
    return(
        <section className="flex flex-col justify-center items-center">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {props.searchedTodos.map(renderFunction)}
            <ul className="space-y-10">
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList}