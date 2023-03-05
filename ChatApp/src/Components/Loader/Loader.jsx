import React from 'react'
import './loader.css'
import Images from '../assets'
const Loader = () => {
  return (
    <div className='Loader'>
      <div className='Loader_box'>
        <img src={Images.loader} alt="loader" style={{width:"100px", height:"100px"}}></img>
      </div>
    </div>
  )
}

export default Loader