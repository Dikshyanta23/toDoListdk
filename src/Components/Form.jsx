import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Form = ({addItem}) => {
    const [newUser, setNewUser] = useState({id: '', name: '', desc: '', isChecked: 'false'})
    const handleSubmit = (e) => {
      e.preventDefault()
      if(newUser.name === "" || newUser.desc === "")  {
        toast.error('Please provide both the values.')
        return
      }
      else {
        const newItem = {id: nanoid(), name: newUser.name, desc : newUser.desc, isChecked: 'false'}
        addItem(newItem)
      }
    }
    const handleChange = (event) => {
      setNewUser({...newUser, [event.target.name]:[event.target.value]})
    }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>To-do list</h4>
      <div className="form-row fr1">
        <label htmlFor="task">Task: </label>
        <input type="text" name="name" id="task" value={newUser.name} onChange = {handleChange} placeholder='Cooking dinner'/>
      </div>
      <div className="form-row fr2">
        <label htmlFor="desc">Description: </label>
        <input type="text" name="desc" id="desc" value={newUser.desc} onChange = {handleChange} placeholder='Pasta and Ravioli'/>
      </div>
      <button type='submit' className='btn'>Submit</button>
    </form>
  );
}

export default Form
