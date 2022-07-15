import { useEffect, useReducer } from "react"
import { todoReducer } from "./TodoReducer"
import { TodoUl } from "./TodoUl"
import { FormReducer } from "../useMemo/FormReducer"



const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || []
}


export const TodoApp = ()=>{

    const [ todos, dispatch ] = useReducer(todoReducer, [],init)

    const handleDelete = (todoId)=>{

        const action = {
            type:'delete',
            payload: todoId
        };

        dispatch(action)
    }

    const handleToggle = (todoId)=>{
        dispatch({
            type:'toggle',
            payload:todoId
        })
    }

    const handleAddTodo = (newTodo)=>{
        dispatch({
            type:'add',
            payload:newTodo
        })
    }

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])


    return(
        <div>
            <h1>Todo App({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                
                <TodoUl 
                todos={todos} 
                handleDelete={handleDelete} 
                handleToggle={handleToggle}/>

                </div>

                <div className="col-5"></div>
                    <h4>agregar todo</h4>
                    <hr/>
                <FormReducer 
                handleAddTodo={handleAddTodo}
                />

                </div>
        </div>
    )
}