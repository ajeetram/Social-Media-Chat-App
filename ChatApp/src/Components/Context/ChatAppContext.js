import React,{createContext, useState, useRouter, useEffect} from 'react'

import { checkIfWalletIsConnected,
    connectWallet,
    connectingWithContract } from '../Utils/apiFeatures'

 export const ChatAppContexts = createContext();

 export const ChatAppProvider = ({children}) => {
  // Use State
const [account, setAccount] = useState("");
const [userName, setUserName] = useState("");
const [friendList, setFriendList] = useState([]);
const [friendMsg, setFriendMsg] = useState([]);
const [loading, setLoading] = useState(false);
const [userList, setUserList] = useState([]);
const [error, setError] = useState("");

// User Data

const [currentUserName, setCurrentUserName] = useState("");
const [currentUserAddress, setCurrentUserAddress] = useState("");


//const router = useRouter();

// Fetch Data At the time page load

const fetchData = async()=>
{
  try {
    // Get Contract
    const contract  = await connectingWithContract();

    // Get account
    const connectAccount = await connectWallet();
    setAccount(connectAccount);
    console.log("Account: ",connectAccount)

    // Get UserName
    const userName = await contract.getUserName(connectAccount);
    setUserName(userName);

    // Get FreindList
    const friendList = await contract.getMyFriendList();
    setFriendList(friendList); 

    // Get All App user List
    const allAppUserList = await contract.getAllAppUser();
    setUserList(allAppUserList);

    
  } catch (error) {
    // setError("Please install MetaMask And connect account");
    
  }
}


useEffect(()=>{
  fetchData();
},[]);


// Read Message
  const readMessage = async(friendAddress)=>
  {
    try {
      const contract = await connectingWithContract();
      const readMsg = await contract.readMessage(friendAddress);
      setFriendMsg(readMsg);
      
    } catch (error) {
      setError("Currently you have no messages")
      
    }
  }

  // Create Account

  const createAccount = async({name, accountAddress})=>
  {
    try {
      // if(name || accountAddress)
      // return ("Name and Account Address can't be empty")

      const contract  = await connectingWithContract();
      const getCreatedUser = await contract.createAccount(name);
      setLoading(true);
      await getCreatedUser.wait();
      setLoading(false);
      window.location.reload();
      
    } catch (error) {
      setError("Error: while creating account, Please reload the page")
      
    }
  }

  //Add Your Friends

  const AddFriends = async({name, accountAddress})=>
  {
    try {
      // if(name|| accountAddress)return("Please provide data")
      const contract  = await connectingWithContract();
      const addMyFriend = await contract.addFriend(accountAddress, name);
      setLoading(true);
      await addMyFriend.wait();
      setLoading(false);
      //router.push("/");
      window.location.reload();
      
    } catch (error) {
      setError("Something went wrong whileadding friends, try again !")
      
    }
  }

  // send Message to your friend
  const sendMessage = async({msg, address})=>
  {
    try {
      
      const contract  = await connectingWithContract();
      const addMessage = await contract.sendMessage(address, msg);
      setLoading(true);
      await addMessage.wait();
      setLoading(false);
      window.location.reload();
      
    } catch (error) {
      setError("Please reload and try again !")
      
    }
  }

  //Read Info
  const readUser = async(userAddress)=>
  {
    try {

      const contract = await connectingWithContract();
      const  userName = await contract.getUserName(userAddress);
      setCurrentUserName(userName);
      setCurrentUserAddress(userAddress);
      
    } catch (error) {
      
    }
  }
  return (
    <ChatAppContexts.Provider 
    value = {{
      readMessage, 
      createAccount, 
      AddFriends, 
      sendMessage, 
      readUser,
      connectWallet,
      checkIfWalletIsConnected,
      account,
      userName,
      friendList,
      friendMsg,
      loading,
      userList,
      error,
      currentUserName,
      currentUserAddress,
       }}>
       
         {children}
    </ChatAppContexts.Provider>
  );
};

 