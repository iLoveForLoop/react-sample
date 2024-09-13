import React from 'react'
import PropTypes from 'prop-types'
import style from './Title.module.css'

function Title({title}) {
  return (
    <>
    <div className={style.container}><h2>{title}</h2></div>
    <h1 className={style.fuck}>Hell</h1>
    
    </>
    
  )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title