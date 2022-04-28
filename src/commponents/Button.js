import React from 'react'

function Button({text,onClick,color}) {
  return(
    <button className='btn' onClick={onClick}style={{backgroundColor:color}}>{text}</button>
  )
}

export default Button