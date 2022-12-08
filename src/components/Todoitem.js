import React from 'react';
import Button from 'react-bootstrap/Button';

const Todoitem = ({todo, onDelete}) => {
    return (
        /* This div is for displaying the content which we are getting from todos.js through prop todo and 
        adding delete on click functionality which triggers onDelete function which takes todo with it*/
        <div className='container'> 
            <h5>Title: {todo.title}</h5>
            <h6>Desc: {todo.desc}</h6>
            <Button variant="danger" size='sm' onClick={() => {onDelete(todo)}}>Delete</Button>{''}
        </div>
    )
}

export default Todoitem
