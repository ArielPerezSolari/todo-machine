
function TodoSearch({searchValue, setSearchValue, loading }){
    const handleChange = (event) =>{
        setSearchValue(event.target.value)
    }
    return (
        <>
        <input onChange={handleChange} 
                placeholder="Search for a task." 
                className="rounded text-center border-solid w-96 h-8 ring-offset-2 ring-2" 
                value={searchValue}
                disabled={loading}
                />
        </>
    )
}


export {TodoSearch}