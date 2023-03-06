import React,{useEffect,useContext} from 'react';
import './App.css';
import {Navbar, AllUser, Chat, Query} from './Components/Index'
//import {AllUser} from './Components/Index'
import { Route, Routes} from 'react-router-dom';

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      {/* <AllUser /> */}
      <Routes>
      <Route path="/alluser" element={<AllUser />} />
      <Route path="/" element={<Chat />} />
      <Route path="/:queryParam1/:queryParam2" element={<Chat />} />
      <Route path="/query" element={<Query />} />
      
              {/* <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} /> */}
      </Routes>
    </>
  );
}

export default App;
