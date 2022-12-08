import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cant be empty !!");
        }
        props.addTodo(title, desc)
    }
   
    return (
        <div className="container">
            <h3 className='text-center'>Add a Todo</h3>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter Title of Your Todo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="desc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Write some Description" />
                </Form.Group>
                <Button variant="success" size='sm' type="submit" >
                    AddTodo
                </Button>
            </Form>
        </div>

    )
}

export default AddTodo
