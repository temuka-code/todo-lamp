import TodoList from './TodoList';

export default function TodoItem({todos}){
    return <div>{
        todos.map(list=>(
            <TodoList key={list} list={list}/>
        ))}
       {console.log(todos)}
       <p>
        {todos}
       </p>
    </div>
}