import { useState } from "react"
import "./styles.css"
import { TodoItems } from "./TodoItems"

function App() {
  const [newTodoNmae, setNewTodoName] = useState("")
  const [todos, setTodo] = useState([])

  function addNewTodos(e){
    e.preventDefault()
    if(newTodoNmae === "") return
    setTodo(currentTodods => {
      
      return [
        ...currentTodods, 
        {name: newTodoNmae, 
          completed: false,
          id: crypto.randomUUID()
        },
      ]
    }) 
    setNewTodoName("") 
  }

  function toggleTodo(todoId,completed){
    setTodo(currentTodods => {
      return currentTodods.map(todo => {
        if(todo.id === todoId) return{ ...todo, completed}

        return todo
      })
    })

  }

  function deleteTodo(todoId){
    setTodo(currentTodods =>{
      return currentTodods.filter(todo => todo.id !== todoId)
    })

  }

  return (
    <>
     <ul id="list">
              {todos.map(todo =>{
                  return (
            <TodoItems key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
         
        )
      })}
         </ul>
        

          <form onSubmit={addNewTodos} id="new-todo-form">
            {JSON.stringify(todos)}
            <label for="todo-input">New Todo</label>
            <input 
            type="text" 
            id="todo-input" 
            value={newTodoNmae}
            onChange={e => setNewTodoName(e.target.value)} 
            />
            <button>Add Todo</button>
          </form>    
    </>
  )
}

export default App
   