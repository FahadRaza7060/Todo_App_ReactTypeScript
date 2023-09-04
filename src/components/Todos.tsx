import { Todo } from '../store/todo';
import { useTodos } from '../store/todo';
import { useSearchParams } from 'react-router-dom';
import '../App.css';

const Todos = () => {

    const {todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos(); // here access the context values e-g functions, values, states

    const [searchParams] = useSearchParams();
    let todos̥Data = searchParams.get("todos");
    console.log("🚀 ~ file: todos.tsx:10 ~ Todos ~ todos̥Data:", todos̥Data)


    let filterData = todos; 

    if (todos̥Data === "active"){
        filterData = filterData.filter((task) => !task.completed)
    }

    if(todos̥Data === "completed"){
        filterData = filterData.filter((task) => task.completed)
    }

  return (
    <ul className="main-task">
        {
            filterData.map((todo:Todo) => {
                return <li key={todo.id}>
                    <input type="checkbox" id={`todo-${todo.id}`}
                        checked={todo.completed}
                        onChange={() => toggleTodoAsCompleted(todo.id)}
                    />
                    <label htmlFor={`todo-${todo.id}`} > {todo.task} </label>

                    {
                        todo.completed && (
                            <button type='button' 
                            onClick={() => handleDeleteTodo(todo.id)}
                            > Delete </button>
                        )
                    }

                </li>
            })
        }
    </ul>
  )
}

export default Todos;