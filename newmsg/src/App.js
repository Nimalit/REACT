// import logo from './logo.svg';
import './App.css';
// import { Message } from "./components/Message/message";
// import React, { useEffect } from 'react';
import { Form } from "./components/Form/Form";
// import { USER } from './extra/consts';
// import { MessageList } from './components/MessageList/MessageList';
// import { useState } from 'react';
// import { ChatList } from './components/Chat/ChatList';
import { Provider, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { store } from "./store";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { Chat } from "./screen/Chat/Chat";
import { ChatList } from './components/Chat/ChatList';
import { Home } from "./screen/Home/home";
import { Profile } from './screen/Profile/profile';
import { useState } from 'react';
import { useSelect } from '@mui/base';
import { addChat, deleteChat } from './store/chats/actions';
import { selectChats } from './store/chats/selectors';
import { selectMessages } from './store/messages/selectors';
import { addMessage, clearMessages, initMessagesForChat } from './store/messages/actions';

function App() {

  // const chats = useSelector(selectChats, shallowEqual);
  // const messages = useSelector(selectMessages);
  // const dispatch = useDispatch();
  // // const [chats, setChats] = useState(initialChats);
  // // const [messages, setMessages] = useState(initMessages);


  // const addNewMessage = (newMsg, id) => {
  //   // setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  //   dispatch(addMessage(newMsg, id));
  // };

  // const addNewChat = (newChat) => {
  //   dispatch(addChat(newChat));
  //   dispatch(initMessagesForChat(newChat.id));
  //   // setChats((prevChats) => [...prevChats, newChat]);
  //   // setMessages((prevMessages) => ({ ...prevMessages, [newChat.id]: [] }));
  // };

  // const removeChat = (id) => {
  //   dispatch(deleteChat(id));
  //   dispatch(clearMessages(id));
  //   // setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
  //   // setMessages((prevMessages) => {
  //   //   const newMessages = { ...prevMessages };
  //   //   delete newMessages[id];

  //   //   return newMessages;
  //   // });
  // };

  return (
    // <Provider store={store}>
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
        <Route path="/chat" element={<ChatList />}>
          <Route path=":id"
            element={<Chat />} />
        </Route>
        <Route path='*' element={<h1>404 ,что то пошло не так!!!</h1>} />
      </Routes>
    </BrowserRouter >
    // </Provider >
  );
}

export default App;
