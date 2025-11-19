import { useState } from "react";

export default function Form({todos,setTodos}){
    const [todo,setTodo]=useState("");
    
    
     function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        // console.log(todos);
        setTodo("")
    }

    return(
        <form onSubmit={handleSubmit} >
            <input 
            onChange={(e)=>setTodo(e.target.value)}
            value={todo} 
            type="text" 
            />
            <button type="submit">Add</button>
        </form>
    );
}
