// import logo from './logo.svg';
import './App.css';
// import { Message } from "./components/Message/message";
// import React, { useEffect } from 'react';
// import { Form } from "./components/Form/Form";
// import { USER } from './extra/consts';
// import { MessageList } from './components/MessageList/MessageList';
// import { useState } from 'react';
// import { ChatList } from './components/Chat/ChatList';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { Chat } from "./screen/Chat/Chat";
import { ChatList } from './components/Chat/ChatList';
import { Home } from "./screen/Home/home";



function App() {
  return (
    <BrowserRouter>
      <ul className='menu'>
        <li>
          <NavLink to="/"
            style={({ isActive }) => ({ color: isActive ? "#e1ff1f" : "#000" })}
          >Home</NavLink>
        </li>
        <li>
          <NavLink to="/chat"
            style={({ isActive }) => ({ color: isActive ? "#e1ff1f" : "#000" })}
          >Chat</NavLink>
        </li>
        <li>
          <NavLink to="/profile"
            style={({ isActive }) => ({ color: isActive ? "g#e1ff1f" : "#000" })}
          >Account</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatList />}>
          <Route path=":id" element={<Chat />} />
        </Route>
        <Route path='*' element={<h1>404 ,что то пошло не так!!!</h1>} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
