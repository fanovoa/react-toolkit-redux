import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

    const [ todoId, settodoId ] = useState(1)
    // const { data : todos =[] , isLoading } = useGetTodosQuery();
    const { data : todo  , isLoading } = useGetTodoQuery(todoId);

    const nextTodo = () => {

        settodoId(todoId+1);
    }

    const prevTodo = () => {
        if( todoId === 1 ) return;
            settodoId(todoId-1)
    }

    return (
    <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading : { isLoading ? 'True': 'False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>


            <button onClick={ prevTodo }>Prev todo</button>
            <button onClick={ nextTodo }>Next todo</button>
            

            {/* <ul style={{ textAlign:'left'}}>
                { todos.map( todo =>(
                    <li key={todo.id} > 
                         <strong>{ todo.completed ? 'DONE': 'Pending'} </strong>
                        { todo.title}
                    </li>
                )) }
            </ul> */}
    </>
    )
}
