import React, { useState } from 'react'

function ToDoListForm(props) {
    const [toDo,SettoDo] = useState({name: "",completed: false});

    const handleSubmit = (f) => {
        f.preventDefault();
        props.onAddtoDoCallback(toDo);
        SettoDo({ name:"",completed: false});
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={toDo.name} placeholder="Enter a todo" onChange={(f) => SettoDo({name:f.target.value, completed: false }) } /><br></br>
            <button>Add</button>
        </form>
    </div>
  )
}

export default ToDoListForm