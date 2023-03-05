import React, { useState, useContext } from "react";
import './filter.css'
import Images from "../assets";
import { ChatAppContexts } from "../Context/ChatAppContext";
import { Model } from "../Index";

const Filter = () => {
  const { account, AddFriends } = useContext(ChatAppContexts);

  //USESTATE
  const [addFriend, setAddFriend] = useState(false);
  return (
    <div className='Filter'>
      <div className='Filter_box'>
        <div className='Filter_box_left'>
          <div className='Filter_box_left_search'>
            <img src={Images.search} alt="image" style={{width:"20px", height:"20px"}} />
            <input type="text" placeholder="search.." />
          </div>
        </div>
        <div className='Filter_box_right'>
          <button>
            <img src={Images.clear} alt="clear" style={{width:"20px", height:"20px"}} />
            CLEAR CHAT
          </button>
          <button onClick={() => setAddFriend(true)}>
            <img src={Images.user} alt="clear" style={{width:"20px", height:"20px"}} />
            ADD FRIEND
          </button>
        </div>
      </div>

      {/* //MODEL COMPONENT */}
      {addFriend && (
        <div className='Filter_model'>
          <Model
            openBox={setAddFriend}
            title="WELCOME TO"
            head="CHAT BUDDY"
            info="This A decentralised chat application.You can talk to anyone via this application without any fear of privacy leak. It is fully secure and transparent."
            smallInfo="Kindley Select Your Friend Name & Address.."
            images={Images.hero}
            functionName={AddFriends}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
