import React from 'react'
import ToDo from './ToDo.js'

const ToDoList = props => {

    return (
        <div>
            {props.ToDoItems.map(item => (
                <ToDo key={item.id} todo={item} />
            ))}
        </div>
    )
}

export default ToDoList