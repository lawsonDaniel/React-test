import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Task({taskName}) {
  return (
        <div className='task'>
        <h3>{taskName} <FaTimes style={{color:'red'}}/></h3>
        </div>
  )
}

export default Task