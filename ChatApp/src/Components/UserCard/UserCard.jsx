import React from 'react'
import './usercard.css'
import Images from '../assets'

const UserCard = ({ el, i, AddFriends }) => {
  console.log(el);
  return (
    <div className='UserCard'>
      <div className='UserCard_box'>
        <img
          className='UserCard_box_img'
          src={Images[`image${i + 1}`]}
          alt="user"
          style={{width:"100px", height:"100px"}}
        />

        <div className='UserCard_box_info'>
          <h3>{el.name}</h3>
          <p>{el.accountAddress.slice(0, 25)}..</p>
          <button
            onClick={() =>
              AddFriends({ name: el.name, accountAddress: el.accountAddress })
            }
          >
            Add Friend
          </button>
        </div>
      </div>

      <small className='number'>{i + 1}</small>
    </div>
  );
};

export default UserCard