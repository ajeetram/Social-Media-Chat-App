import {ethers} from 'ethers'
import Web3Modal from 'web3modal'

import {ChatAppAddress, ChatAppABI} from '../Context/Constants'

export const checkIfWalletIsConnected = async()=>
{
    try {
        if(!window.ethereum) return ("Please Install MetaMask")
        const accounts = window.ethereum.request({
            method:"eth_accounts",
        })

        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error)
        
    }
}

export const connectWallet = async()=>
{
    try {
        if(!window.ethereum) return console.log("Install MetaMask");

        const accounts = await window.ethereum.request({
            method:"eth_requestAccounts",
        })

        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {

        console.log(error)   
    }

}

const fetchContract = (signerorProvider)=> new ethers.Contract(ChatAppAddress, ChatAppABI, signerorProvider);

export const connectingWithContract = async()=>
{
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    }   catch (error) {
        
        console.log(error);
    }
}  

export const convertTime = (time)=>
{
    const newTime = new Date(time*1000);
    const realTime = newTime.getHours() + ":" + newTime.getMinutes()+":"+newTime.getSeconds() 
    +"  Date : "+ newTime.getDate() + "/" + (newTime.getMonth()+1)+ "/"+newTime.getFullYear() ;

    return realTime;

}