import React, { useState, useReducer } from 'react';


function addTodo(name){
    return {name:name}
}

function reducer(todos,action){
    switch(action.type){
        case 'add-task':
            return [...todos , addTodo(action.payload.name)]

        default:
            return todos
    }
}

export default function Todo2() {
    const [todos,dispatch] = useReducer(reducer,[])
    const [name,setName]=useState('')

    function handleClick(e){
        e.preventDefault()
        setName('')
        return dispatch({type:'add-task', payload:{name}})
        
    }

    function handleDelete(index){

    }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <input type="submit" value="ADD"/>
      </form>  
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.name}
            {/* <button onClick={handleDelete(index)}>Delete</button> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// export default Todo2
