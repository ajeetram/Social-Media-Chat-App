import React, { useEffect, useState} from "react";
import Images from "../../assets";
//import { useRouter } from "next/router";
import{ useParams,useMemo} from 'react-router-dom'
//INTERNAL IMPORT
import  "./chat.css";
import {convertTime}  from "../../Utils/apiFeatures";
import { Loader } from "../../Index";

const Chat = ({
  functionName,
  readMessage,
  friendMsg,
  account,
  userName,
  loading,
  currentUserName,
  currentUserAddress,
  readUser,
}) => {
  //USTE STATE
  const [message, setMessage] = useState("");

 const  {queryParam1}  = useParams();
 const  {queryParam2}  = useParams();
 //setAddress(router.address)
  // useEffect(() => {
  //   if (!router?.isReady) return;
  //   // setChatData(router.query);
  //   setAddress(router.address)
  //   setName(router.name)
  // }, [router?.isReady]);
  console.log("Data",queryParam1, queryParam2);
  useEffect(() => {
    if (queryParam2) {
      readMessage(queryParam2);
      readUser(queryParam1);
    }
  }, []);

  return (
    <div className='Chat'>
      {currentUserName && currentUserAddress ? (
        <div className='Chat_user_info'>
          <img src={Images.accountName} alt="image" style={{width:"70px", height:"70px"}} />
          <div className='Chat_user_info_box'>
            <h4>{currentUserName}</h4>
            <p className='show'>{currentUserAddress}</p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className='Chat_box_box'>
        <div className='Chat_box'>
          <div className='Chat_box_left'>
            {friendMsg.map((el, i) => (
              <div>
                {el.sender === queryParam2 ? (
                  <div className='Chat_box_left_title'>
                    <img
                      src={Images.accountName}
                      alt="image"
                      style={{width:"50px", height:"50px"}}
                    />
                    <span>
                      {queryParam1} {""}
                      <small>Time: {convertTime(el.timestamp)}</small>
                    </span>
                  </div>
                ) : (
                  <div className='Chat_box_left_title'>
                    <img
                      src={Images.accountName}
                      alt="image"
                      style={{width:"50px", height:"50px"}}
                    />
                    <span>
                      {userName} {""}
                      <small>Time: {convertTime(el.timestamp)}</small>
                    </span>
                  </div>
                )}
                <p key={i + 1}>
                  {el.msg}
                  {""}
                  {""}
                </p>
              </div>
            ))}
          </div>
        </div>

        {currentUserName && currentUserAddress ? (
          <div className= 'Chat_box_send'>
            <div className='Chat_box_send_img'>
              <img src={Images.smile} alt="smile" style={{width:"50px", height:"50px"}} />
              <input
                type="text"
                placeholder="type your message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <img src={Images.file} alt="file" style={{width:"50px", height:"50px"}} />
              {loading === true ? (
                <Loader />
              ) : (
                <img
                  src={Images.send}
                  alt="file"
                  style={{width:"50px", height:"50px"}}
                  onClick={() =>
                    functionName({address:queryParam2, msg:message})
                  }
                />
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Chat;
