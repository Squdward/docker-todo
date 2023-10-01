import { Todo } from './components/todo'
import { ITodo } from './components/todo/types'
import { NoTodos } from './view/todo/NoTodos/NoTodos'
import { AddTodo } from './view/todo/addTodo/addTodo'
import {useState} from "react"

function App() {
  const [list, setList] = useState<ITodo[]>([
    {
      id: '1',
      name: "Доделать реакт",
    },
    {
      id: '2',
      name: "Сделать бек",
    },
    {
      id: '3',
      name: "Создать и настроить докер файл",
    },
  ])

  return (
    <div className={'Todos'}>
      <div className={'Todos-add'}>
        <AddTodo/>
      </div>

      {list.length === 0 && <NoTodos/>}
      {list.length != 0 &&
        <div className='Todos-grid'>
          {list.map( i  => <Todo onDelete={() => {}} id={i.id} name={i.name} key={i.id} />)}
        </div>
        }
    </div>
  )
}

export default App
