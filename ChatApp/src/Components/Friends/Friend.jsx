import React, { useState, useContext } from "react";

import "./friend.css";
import Card from "./Card/Card";
import Chat from "./Chat/Chat";
import { ChatAppContexts } from "../Context/ChatAppContext";

const Friend = () => {
  // const array = [1, 2, 34, 5, 6];/

  const {
    sendMessage,
    account,
    friendList,
    readMessage,
    userName,
    loading,
    friendMsg,
    currentUserName,
    currentUserAddress,
    readUser,
  } = useContext(ChatAppContexts);
  console.log(friendList);
  return (
    <div className='Friend'>
      <div className='Friend_box'>
        <div className='Friend_box_left'>
          {friendList.map((el, i) => (
            <Card
              key={i + 1}
              el={el}
              i={i}
              readMessage={readMessage}
              readUser={readUser}
            />
          ))}
        </div>
        <div className='Friend_box_right'>
          <Chat
            functionName={sendMessage}
            readMessage={readMessage}
            friendMsg={friendMsg}
            account={account}
            userName={userName}
            loading={loading}
            currentUserName={currentUserName}
            currentUserAddress={currentUserAddress}
            readUser={readUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Friend;
