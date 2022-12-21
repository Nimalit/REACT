import logo from './logo.svg';
import './App.css';
import { Message } from "./components/Message/message";
import React, { useEffect } from 'react';
import { Form } from "./components/Form/Form";
import { USER } from './extra/consts';
import { MessageList } from './components/MessageList/MessageList';
import { useState } from 'react';
import { ChatList } from './components/Chat/ChatList';
import Typography from '@mui/material/Typography';


function App() {

  const [messages, setMessages] = useState([]);

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  }

  const sendMessage = (text) => {
    addMessage({
      author: USER.users,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    let timeout;
    if (messages[messages.length - 1]?.author === USER.users) {
      timeout = setTimeout(() => {
        addMessage({
          author: USER.bot,
          text: 'Привет мой друг',
          id: `msg-${Date.now()}`,
        });
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    }
  }, [messages]);

  return (
    <div className='App'>
      <h1 className='first'>Добро пожаловать мой первый Message </h1>
      <hr></hr>
      <div className='heanderElem'>
        <ChatList></ChatList>
        <MessageList messages={messages} />
        <Form onSubmit={sendMessage} />
      </div>
    </div>
  );
}

export default App;
