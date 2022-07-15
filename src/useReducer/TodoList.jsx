import '../useReducer/todo.css'

export const TodoList = ({todos,index,handleToggle,handleDelete})=>{
    return(
        <li 
        className="list-group-item"
        >
        <p
            className={`${todos.done && 'complete'}`}
            onClick={()=> handleToggle(todos.id)}
        >          
            {index + 1},
            {todos.desc}
        </p>

        <button 
        className="btn btn-danger" 
        onClick={()=> handleDelete(todos.id)}
        >Borrar</button>
        </li>
    )
}