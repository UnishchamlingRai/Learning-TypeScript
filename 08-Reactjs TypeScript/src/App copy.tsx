// import React from "react"

import { useRef, useState } from "react"

// const intialItems=[{
//   id:"t1",name:"Learn Typescript"
// }]
interface todo{
  id:number;
  name:string
}
function App() {


  const [items,setItems]=useState<todo[]>([])
  function todoDeleteHandler(id:number){
    setItems((prevItems)=>{
      return prevItems.filter((item)=>item.id!==id)
    })
  }
 
  function addTodoHandler(todoText:string){
    console.log(todoText)
    setItems((prevItems)=>{
      return [...prevItems,{id:Math.random(),name:todoText}]
    })
  }

  return (
    <>
     <h1>Hello</h1>
     <TodoList items={items} onDeleteTodo={todoDeleteHandler}/>
     <TodoAdd onAddTodo={addTodoHandler}/>
    </>
  )
}

export default App

interface todo{
  id:number
  name:string
}
interface todoList{
  items:todo[];
  onDeleteTodo:(id:number)=>void ;
}

function TodoList({items,onDeleteTodo}:todoList){
  // const todoes=props.items
  return <ul>
   {items.map((item)=>(<li key={item.id}>{item.name}

    <button onClick={()=>onDeleteTodo(item.id)}>Delete</button>
   </li>))}
   
   
  </ul>
}
type AddTodoProps={
  onAddTodo:(todoText:string)=>void
  
 
}


function TodoAdd({onAddTodo}:AddTodoProps){
  const todoText=useRef<HTMLInputElement>(null)
  function handleSubmit(event:React.FormEvent){
    event.preventDefault()
    const todoInput=todoText.current!.value
   
    onAddTodo(todoInput)
  }
  return <form onSubmit={handleSubmit}>
    <label htmlFor="todoAdd">Todo Text</label>
    <input type="add here" id="todoAdd" ref={todoText}/>
    <button>Add Todo</button>
    
  </form>
}

// const TodoList:React.FC<todoList>=()=>{
//   return <ul>
//   </ul>
// }