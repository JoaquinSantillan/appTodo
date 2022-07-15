import { useForm } from "../Hooks/useForm"


export const FormReducer = ({handleAddTodo})=>{
    
    const [{description},handleInputChange,reset] = useForm({
        description:""
    })

    const handleSubmit = (e)=>{
    e.preventDefault()

        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id:new Date().getTime(),
            desc:[description],
            done:false
        };

        handleAddTodo(newTodo)
        reset()
    }
    
    return(
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="description"
        className="form-control"
        placeholder="aprender.."
        autoComplete="off"
        value={description}
        onChange={handleInputChange}
        />

        <button type="submit"
        className="btn btn-outline-primary mt-2">agregar</button>
    </form>
    )
}