import { useState } from 'react'; 
import { useTodos } from "../store/todo";

function AddToDo() {
    
    const[todo, setTodo] = useState("");
    const {handleAddToDo} = useTodos(); // consume 'handleAddTodo' function with 'useTodos' consumer

    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(todo);
        setTodo("");
    }

  return (
    <form onSubmit={handleFormSubmit} >
     <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
     <button type="submit"> Add </button>
    </form>
  )
}

export default AddToDo;