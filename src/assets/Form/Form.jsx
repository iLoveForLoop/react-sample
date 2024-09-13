import React, { useState } from 'react'
import style from './Form.module.css'

function Form({onSendData}) {

  const initialData = {
    fname: '',
    lname: '',
    age: '',
    isHappy: false
  }

  const [formData, setFormData] = useState(initialData)

  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name] : value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    onSendData(formData)
    setFormData(initialData)
  }
  
  

  return (
    <>
    <div className={style.container}>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="fname" >First Name:</label>
            <input type="text" name='fname' onChange={handleChange} value={formData.fname}/> <br />

            <label htmlFor="lname" >Last Name:</label>
            <input type="text" name='lname' onChange={handleChange} value={formData.lname}/><br />

            <label htmlFor="age">Age:</label>
            <input type="number" name='age'onChange={handleChange} value={formData.age} /> <br />
            
            <label htmlFor="isHappy">Are you happy?</label>
            <input type="checkbox" name="isHappy" onChange={handleChange} checked={formData.isHappy}/> <br />

            <button type='submit' className='btn'>Submit</button>
        </form>
    </div>
    
    <h1>HELLO WORD</h1>
    
    </>
    
  )
}

export default Form