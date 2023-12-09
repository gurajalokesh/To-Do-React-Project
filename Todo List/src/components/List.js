import React from 'react'

function List({todo}) {
  return (
    <div>
      <span style={{color:todo.complete ? '#AAA' : '#000'}}>{todo.name}</span>
      <button>Delete</button>
    </div>
  )
}

export default List
