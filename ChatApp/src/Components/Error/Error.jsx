import React from 'react'
import './error.css'
const Error = ({error}) => {
  return (
    <div className='Error'>
      <div className='Error_box'>
        <h1>Find Some Error...</h1>
        {
          error
        }
      </div>
    </div>
  )
}

export default Error