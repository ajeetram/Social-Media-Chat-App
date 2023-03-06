import React, { useContext, useState } from 'react'
import './model.css'
import Images from '../assets';
import {ChatAppContexts} from '../Context/ChatAppContext';
import {Loader} from '../Index';


const Model = ({openBox,title,head,info,smallInfo,images,functionName, address}) => {

  const [name, setName] = useState(" ");
  const [accountAddress, setAccountAddress] = useState(" ");
  const {loading} = useContext(ChatAppContexts);


  return (
    <div className='Model'>
      <div className='Model_box'>
        <div className='Model_box_left'>
        <img src={images} alt="buddy" ></img>
        </div>
        <div className='Model_box_right'>
          <h1>{title} <span>{head}</span></h1>
          <p>{info}</p>
          <small>{smallInfo}</small>
          {
            loading===true ? (<Loader />):
            ( 
            <div className='Model_box_right_name'> 
            <div className='Model_box_right_name_info'>
              <img src={Images.username} alt="user" style={{width:"30px", height:"30px"}}></img>
              <input type="text" placeholder='Your Name' onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className='Model_box_right_name_info'>
              <img src={Images.account} alt="user" style={{width:"30px", height:"30px"}}></img>
              <input type="text" placeholder={address || "Enter Address"} onChange={(e)=>setAccountAddress(e.target.value)}></input>
            </div>
            <div className='Model_box_right_name_btn'>
              <button onClick={()=>functionName({name,accountAddress})}>
                {" "}
                <img src={Images.send} alt="send" style={{width:"30px", height:"30px"}}></img>
                {" "}
                Submit
              </button>
              <button onClick={()=>openBox(false)}>
                {" "}
                <img src={Images.close} alt="close" style={{width:"30px", height:"30px"}}></img>
                {" "}
                Cancel
              </button>
            </div>
          </div>
          )}  
        </div>
        
      </div>
    </div>
  )
}

export default Model