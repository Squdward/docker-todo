import { Todo } from './components/todo'
import { getTodos } from './hooks/getTodos'
import { NoTodos } from './view/todo/NoTodos/NoTodos'
import { AddTodo } from './view/todo/addTodo/addTodo'

function App() {
  const todos = getTodos()


  return (
    <div className={'Todos'}>
      <div className={'Todos-add'}>
        <AddTodo/>
      </div>

      {todos.length === 0 && <NoTodos/>}
      {todos.length != 0 &&
        <div className='Todos-grid'>
          {todos.map( i  => <Todo onDelete={() => {}} id={i._id} name={i.name} key={i._id} />)}
        </div>
        }
    </div>
  )
}

export default App
