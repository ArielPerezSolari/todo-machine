import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props){
    
    return(
        <li className={`flex space-x-11 bg-stone-100 py-1.5 px-2 my-2 justify-between rounded  shadow-2xl `}>
            <span   className={props.completed ? 'text-green-500' : undefined}
                    onClick={props.onComplete}
                    ><FontAwesomeIcon icon={faCheck} />
            </span>

            <p className={props.completed ? 'line-through text-center' : undefined }>{props.text}</p>

            <span   className="text-red-500" 
                    onClick={props.onDelete}
                    ><FontAwesomeIcon icon={faTrash} />
            </span>
        </li>
    );
}


export {TodoItem}