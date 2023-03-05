import React,{useState, useEffect, useContext} from 'react'
import './alluser.css';
import { UserCard } from '../Index';
import { ChatAppContexts } from '../Context/ChatAppContext';
const AllUser = () => {

    const {userList, AddFriends} = useContext(ChatAppContexts);


  return (
    <div>
     <div className='alluser_info'>
     <h1>Find Your Friends</h1>
     </div>
     <div className='alluser'>
        {userList.map((el, i)=>(
            <UserCard key={i+1} el={el} i={i} AddFriends={AddFriends} />
        ))}
     </div>
    </div>
   
  )
}

export default AllUser