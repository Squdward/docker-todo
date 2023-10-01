import { useEffect, useState } from "react"

const useGetTodos = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo()
  }, [])

  const getTodo = async () => {
      try {
        const request = await fetch('http://localhost:3001/todo');
        const todos = await request.json()

        setTodo(todos)
      } catch (error) {
        console.log(error)
      }
  }

  return todo
}

export {useGetTodos as getTodos}