import React, {useState} from 'react'
import ToDoListForm from './ToDoListForm'

function List() {
  const [toDos, SetToDos] = useState([])
  const addtoDo = (toDo) =>{
    console.log(toDo);
    const toDosCopy = [...toDos]
    toDosCopy.push(toDo)
    SetToDos(toDosCopy);
  };

  const markAsCompleted = (name) =>{
    const idx = toDos.findIndex(todo => todo.name === name)
    const toDosCopy =[...toDos];
    toDosCopy[idx].completed = !toDosCopy[idx].completed;
    SetToDos(toDosCopy);
  }
  return (
    <div>
      <div>
        {
          toDos.map((toDo) => {
            return <p key={toDo.name} onClick={() => markAsCompleted(toDo.name)} className={toDo.completed ? "strike" : ""}>{toDo.name}</p>;
          })
        }
      </div>
      <div>All list of todos</div>
      <ToDoListForm onAddtoDoCallback= {addtoDo} />
    </div>
  );
}

export default List