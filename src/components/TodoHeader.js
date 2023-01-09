import React from "react"

function TodoHeader({children, loading}){
    return(
        <header className="font-mono h-28 flex items-center flex-col pt-4 bg-green-200 border-solid border-2 border-black rounded ">
            <div className="space-y-4  justify-center text-center font-mono">
                {React.Children.toArray(children).map((child) =>{
                    return React.cloneElement(child, {loading})}
                    )}
            </div>
        </header>
    )
}

export  { TodoHeader }