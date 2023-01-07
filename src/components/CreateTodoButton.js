

function CreateTodoButton(props){
    const handleClick = ()=> {
        props.setOpenModal(prevState => !prevState)
        
    }
    return(
        <button 
        className="absolute top-28 right-28 z-40 bg-cyan-500 shadow-blue-500/50  rounded border-solid h-10 w-10 ring-offset-2 ring-2"
        onClick={handleClick}
        >+
        </button>
    );
}


export {CreateTodoButton}