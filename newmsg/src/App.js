// import logo from './logo.svg';
import './App.css';
// import { Message } from "./components/Message/message";
// import React, { useEffect } from 'react';
import { Form } from "./components/Form/Form";
// import { USER } from './extra/consts';
// import { MessageList } from './components/MessageList/MessageList';
// import { useState } from 'react';
// import { ChatList } from './components/Chat/ChatList';
import { Provider } from 'react-redux';
import { store } from "./store";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { Chat } from "./screen/Chat/Chat";
import { ChatList } from './components/Chat/ChatList';
import { Home } from "./screen/Home/home";
import { Profile } from './screen/Profile/profile';
import { useState } from 'react';

const initialChats = [
  {
    name: "YAR",
    id: "YAR"
  },
  {
    name: "BRO",
    id: "BRO",
  },
  {
    name: "Special",
    id: "special"
  },
];

const initMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});


function App() {

  const [chats, setChats] = useState(initialChats);
  const [messages, setMessages] = useState(initMessages);
  {/* <ThereContext.Provider value={{ theme, chanteTheme: toogleTheme }}> */ }

  const addMessage = (newMsg, id) => {
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const addChat = (newChat) => {
    setChats((prevChats) => [...prevChats, newChat]);
    setMessages((prevMessages) => ({ ...prevMessages, [newChat.id]: [] }));
  };

  const deleteChat = (id) => {
    setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
    setMessages((prevMessages) => {
      const newMessages = { ...prevMessages };
      delete newMessages[id];

      return newMessages;
    });
  };

  return (
    <Provider store={store}>
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
            >Profile</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatList
            deleteChat={deleteChat}
            addChat={addChat}
            chats={chats} />}>
            <Route path=":id" element={<Chat messages={messages} addMessage={addMessage} />} />
          </Route>
          <Route path='*' element={<h1>404 ,что то пошло не так!!!</h1>} />
        </Routes>
      </BrowserRouter >
      {/* </ThereContext.Provider> */}
    </Provider>
  );
}

export default App;
