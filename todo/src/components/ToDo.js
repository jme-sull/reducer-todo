import React from 'react'
import './ToDo.css'

 const ToDo = props => {

    return (
        <div>
            <p onClick={(e) => props.toggleCompleted(e, props.todo)} 
            className={`item${props.todo.completed ? ' completed' : ' uncompleted'}`}> {props.todo.item}</p>
        </div>
    )
}

export default ToDo