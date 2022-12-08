import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';


let App = () => {
  const onDelete = (todo) => {
    setTodoobj(todoobj.filter((todoobjcheck)=>{
      return todoobjcheck!==todo;
    }))
  }
  const addTodo = (title,desc) =>{
    console.log("I am adding title and desc");
    let sno = todoobj[todoobj.length-1].sno + 1
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
     setTodoobj([...todoobj, myTodo]);
    console.log(myTodo)
  }
  const [todoobj, setTodoobj] = useState([
    {
      sno: 1,
      title: "Go to Gym",
      desc: "You can complete this task by going to Gym"
    },
    {
      sno: 2,
      title: "Go to Mall",
      desc: "You can complete this task by going to Mall"
    },
    {
      sno: 3,
      title: "Go to Shop",
      desc: "You can complete this task by going to Shop"
    }
  ]);
  
  
  return (
    <>
      <Header title='Todo List' />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todoobj} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
