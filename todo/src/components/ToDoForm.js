import React, { useState } from 'react'

const ToDoForm = props => {

    const [ formInput, setFormInput] = useState('')

    const handleInputChange = e => {
        setFormInput(e.target.value)
    }


    return (
        <form style={{display: 'flex', flexDirection:'column', width: '20%'}} onSubmit={props.handleSubmit}>
            <input
                type='text'
                name='item'
                value={formInput}
                onChange={handleInputChange}
                />
                <button style={{width:'5rem', margin: '1%'}}>Submit</button>
        </form>
    )
}

export default ToDoForm
