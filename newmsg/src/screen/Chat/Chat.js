// import '../../App.css';
import { Message } from "../../components/Message/message";
import { useEffect, useState } from "react";
import { ChatList } from "../../components/Chat/ChatList";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { USER } from "../../extra/consts";
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const chats = [
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

const initMessages = {
    YAR: [],
    BRO: [],
    special: [],
};
// const messages = { chatId: [], chatId: [], chatId: [] }

export function Chat() {
    const { id } = useParams();
    const [messages, setMessages] = useState(initMessages);

    const addMessage = (newMsg) => {
        setMessages({ ...messages, [id]: [...messages[id], newMsg] });
    }

    const sendMessage = (text) => {
        addMessage({
            author: USER.users,
            text,
            id: `msg-${Date.now()}`,
        });
    };

    useEffect(() => {
        const lastMessage = messages[id]?.[messages[id]?.length - 1];
        let timeout;
        if (lastMessage?.author === USER.users) {
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

    if (!messages[id]) {
        return <Navigate to="/сhat" replace />
    }

    return (
        <div className='App'>
            <div className='heanderElem'>
                <MessageList messages={messages[id]} />
                <Form onSubmit={sendMessage} />
            </div>
        </div>
    );
}
