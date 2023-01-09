import {  useState } from "react"


function TodoForm({ addTodo, setOpenModal }) {

    const [newTodoValue, setNewTodoValue] = useState('')

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }
    const onCancel = () => {
        setNewTodoValue('')
        setOpenModal()

    }
    const onSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
        setNewTodoValue('')
        setOpenModal(false)
    }
    return(
        <form className="flex flex-col" onSubmit={onSubmit}>
            <label>Escribe una tarea</label>
            <textarea 
                className="text-black"
                placeholder="Estudiar React"
                value={newTodoValue}
                onChange={onChange}
            />
            <div>
            <button 
                className="m-3 opacity-100"
                type="button"
                onClick={onCancel}    
            >
                Cancelar
            </button>
            <button
                className="m-3 opacity-100"
                type="submit" 
            >
                Añadir
            </button>
            </div>
            
        </form>
    )
}

export {TodoForm}