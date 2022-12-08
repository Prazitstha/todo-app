import React from 'react';
import Todoitem from './Todoitem';

const Todos = ({todos, onDelete}) => {
  let myStyle = {
    minHeight: "100vh"
  }
  return (
    /* This div is for getting the object from app.js through prop todos and passing the object to todoitem.js
     and with other functionalities like checking whether the todo list is empty or not and delete functionality*/
    <div className='container my-3' style={myStyle}>
      <h1 className='text-center'>Todo List</h1>
      {todos.length===0 ? <h3>No Todos to display</h3>:todos.map((todo)=>{
        return <Todoitem todo={todo} key={todo.sno} onDelete={onDelete}/>
      })}
    </div>
  )
}

export default Todos
