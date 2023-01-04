import { useContext } from "react"
import { TodoContext } from "../context"


function TodoSearch(){
    const {searchValue, setSearchValue} = useContext(TodoContext)
    const handleChange = (event) =>{
        setSearchValue(event.target.value)
    }
    return (
        <>
        <input onChange={handleChange} 
                placeholder="Search for a task." 
                className="rounded text-center border-solid w-96 h-8 ring-offset-2 ring-2" 
                value={searchValue}
                />
        <p>Resultados para : {searchValue}</p>
        </>
    )
}


export {TodoSearch}