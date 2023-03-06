import React from 'react'
import './query.css'
const Query = () => {
  return (
    <div className='query'>
     <div className='query_box'>
     <h1>How To Use</h1>
     </div>
     <div className='note'>
        <h3>Note:</h3>
        <p>*Before start to use this application first make sure that you should have to install the MetaMask Extension and account also should be created</p>
     </div>
     <div className='list'>
    <ul>
        <li>First Connect Your Wallet.</li>
        <li>Create Your Account on click on create account button and the just enter your name and submit it.</li>
        <li>When Your account get created it redirect you the chat application section or refresh it.</li>
        <li>Now its time to add your friend but make sure that your friend also have created account in this application.</li>
        <li>If you and your friend both have created your account in this application then go to all user section and add your friend to friend list. </li>
        <li>Now both get connected to each other.</li>
        <li>Now You can talk to your friend.</li>
    </ul>
     </div>
    </div>
   
  )
}

export default Query