import React, { useEffect, useState, useContext } from "react";
import "./navbar.css";
import {Link} from 'react-router-dom';
import { ChatAppContexts } from "../Context/ChatAppContext";
import { Model, Error } from "../Index";
import Images from '../assets/index';
const Navbar = () => {
  const menuItems = [
    {
      menu: "All User",
      link: "alluser",
    },
    {
      menu: "Chat",
      link: "/",
    },
    {
      menu: "Contact",
      link: "/",
    },
    {
      menu: "Setting",
      link: "/",
    },
    {
      menu: "FAQS",
      link: "/query",
    },
    {
      menu: "Terms Of Use",
      link: "/",
    },
  ];

  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { account, userName, connectWallet,createAccount, error } = useContext(ChatAppContexts);

  return (
    <div className="NavBar">
      <div className="NavBar_box">
        <div className="NavBar_box_left">
          <img
            src={Images.logo}
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          ></img>
        </div>
        <div className="NavBar_box_right">
          <div className="NavBar_box_right_menu">
            {menuItems.map((el, i) => (
              <div
                onClick={() => setActive(i + 1)}
                key={i + 1}
                className={`${"NavBar-box_right_menu_items"} ${
                  active === i + 1 ? "active_btn" : ""
                }`}
              >
                <Link to={el.link} className="NavBar_box_right_menu_items_link">{el.menu}</Link> 
              </div>
            ))}
          </div>

          {/* //Mobile Device */}
          {open && (
            <div className="mobile_menu">
              {menuItems.map((el, i) => (
                <div
                  onClick={() => setActive(i + 1)}
                  key={i + 1}
                  className={`${"mobile_items"} ${
                    active === i + 1 ? "active_btn" : ""
                  }`}
                >
                  <Link to={el.link}  className="mobile_menu_items_link" >{el.menu}</Link>
                    
                 
                </div>
              ))}
              <p className="mobile_menu_btn">
                <img
                  src={Images.close}
                  alt="close"
                  style={{ width: "50px", height: "50px" }}
                  onClick={() => setOpen(false)}
                ></img>
              </p>
            </div>
          )}

          {/* CONNECT WALLET */}
          <div className='NavBar_box_right_connect'>
            {account === "" ? (
              <button onClick={() => connectWallet()}>
                {""}
                <span>Connect Wallet</span>
              </button>
            ) : (
              <button onClick={() => setOpenModel(true)}>
                {""}
                <img
                  src={userName ? Images.accountName : Images.create2}
                  alt="Account image"
                  width={20}
                  height={20}
                />
                {""}
                <small>{userName || "Create Account"}</small>
              </button>
            )}
          </div>


          <div className="NavBar_box_right_open" onClick={() => setOpen(true)}>
            <img
              src={Images.open}
              alt="open"
              style={{ width: "30px", height: "30px" }}
            ></img>
          </div>
        </div>
      </div>
      {/* Model Component */}
      {
        openModel && (
          <div className="model_box">
            <Model openBox ={setOpenModel}
            title="WELCOME TO"
            head="CHAT TALK"
            info = "This A decentralised chat application.You can talk to anyone via this application without any fear of privacy leak. It is fully secure and transparent." 
            smallInfo= "Kindley Enter Your Name..."
            images = {Images.hero}
            functionName = {createAccount}
            address={account}
            />
          </div>
        )
      }

      {error=== "" ? "" :<Error error = {error} />}
    </div>
  );
};

export default Navbar;
