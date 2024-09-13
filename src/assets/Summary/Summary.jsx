import React from 'react'
import style from './Summary.module.css'

function Summary({summaryData}) {

  return (
    <>
        <div className={style.summary}>
            <h1>Summary:</h1>
            <p>{summaryData.fname}</p>
            <p>{summaryData.lname}</p>
            <p>{summaryData.age}</p>
            <p>{summaryData.isHappy}</p>
        </div>
        
    </>
    
  )
}

export default Summary