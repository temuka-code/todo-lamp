import React, { useState } from "react"; 

import Form from "./Form"
// import '../css/style.css'
import TodoItem from "./TodoItem";

export default function Todo() {

    const [todos,setTodos]=useState([]);

    return (
        <div>
            <Form todos={todos} setTodos={setTodos}/>
            <TodoItem todos={todos} />
        </div>
    );
}

