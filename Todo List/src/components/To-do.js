import React, {useState, useReducer} from 'react';



function reducer(todos,action){
    switch(action.type){
        case 'add-todo':
            return [...todos, newTodo(action.payload.name)]

        default:
            return todos

    }
}

function newTodo(name){
    return {id: Date.now(), name:name, complete:false}
}


function ToDo(){
    const [todos,dispatch] = useReducer(reducer, [])
    const [name,setName] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:'add-todo',payload:{name: name}})
        setName('')
    }

    
    return(
        <>
           <form>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <button type='submit' onClick={handleSubmit}>ADD Task</button>
           </form>

           
        </>
    )
    
}

export default ToDo