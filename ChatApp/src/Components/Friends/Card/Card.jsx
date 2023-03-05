import React, { useEffect } from "react";
import {Link }from "react-router-dom";

//INTERNAL IMPORT
import  "./card.css";
import Images from  "../../assets";
// import { browserHistory } from './react-router'

const Card = ({ readMessage, el, i, readUser }) => {
 // query: { name: `${el.name}`, address: `${el.pub_key}` },
  //const queryParam = "exampleQueryParam";
  const queryParam1= el.name;
  const queryParam2= el.pub_key;
  return (
    <Link
      to={`/${queryParam1}/${queryParam2}`}
    >
      <div
        className='Card'
         onClick={() =>(readMessage(el.pub_key), readUser(el.pub_key)) }
      >
        <div className='Card_box'>
          <div className='Card_box_left'>
            <img
              src={Images.accountName}
              alt="username"
              style={{width:"50px", height:"50px"}}
              className='Card_box_left_img'
            />
          </div>
          <div className='Card_box_right'>
            <div className='Card_box_right_middle'>
              <h4>{el.name}</h4>
              <small>{el.pub_key?.slice(21)}..</small>
            </div>
            <div className='Card_box_right_end'>
              <small>{i + 1}</small>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
