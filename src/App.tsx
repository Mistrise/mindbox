import {useState} from "react";
import TodoInput from "./components/TodoInput.tsx";
import TodoList from "./components/TodoList.tsx";

export interface TodoListInterface {
    todo: string,
    id: string,
    status: "COMPLETE" | "INCOMPLETE"
}

function App() {
  const [todoList, setTodoList] = useState<TodoListInterface[] | null>(null)


  return (
    <>
      <TodoInput todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </>
  )
}

export default App
