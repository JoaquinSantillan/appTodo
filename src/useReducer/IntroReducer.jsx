

const initialState = [{
    id:3,
    todo:'Aprender React',
    done:false
}]

const todoReducer = (state = initialState , action)=>{
    
    if(action?.type === 'add'){
        return[...state,action.payload]
    }
    
    return state
}

let todos = todoReducer();

const newTodo = {
    id:2,
    todo:'Aprender Node',
    done:false
}

const addTodoAction = {
    type:'add',
    payload: newTodo
}

todos = todoReducer(todos,addTodoAction)


console.log(todos)