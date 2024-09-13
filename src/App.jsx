import { useEffect, useState } from 'react'
import './App.css'
import Form from './assets/Form/Form'
import Title from './assets/Title/Title'
import Greet from './assets/Greet/Greet'
import Summary from './assets/Summary/Summary'

function App() {

  const [formData, setFormData] = useState([])

  const receiveData = (data) =>{
    setFormData(prevData => [...prevData, data])
  }

  useEffect(() =>{
    {console.log( 'Test', formData)}
  }, [formData])

  
  return (
    <>
      <Title title='Hey my name is jeferson bayking'/>
      <Form onSendData={receiveData}/>
      {formData.map((data, index) =>(
        <Summary summaryData={data} key={index}/>
      ))}
      
      
    </>
  )
}

export default App
