import {TodoList} from "./TodoList"

export const TodoUl = ({todos, handleDelete,handleToggle})=>{
    
    return(
        <ul className="list-group list-group-flush">
        {
            todos.map((todos,i) => (
                <TodoList 
                key={todos.id}
                todos={todos}
                index={i}
                handleDelete={handleDelete}
                handleToggle={handleToggle}/>
            ))
        }
        </ul>
    )
}