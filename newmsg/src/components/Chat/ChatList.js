// import { ListItem } from '@mui/material';
// import { List } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { Chat } from '../../screen/Chat/Chat';
import { Form } from '../Form/Form';
import './ChatList.style.css';


export const ChatList = ({ chats, addChat, deleteChat }) => {
    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };

        addChat(newChat);
    };

    const handleDelete = (id) => {

    }

    return (
        < div className="chat_first" >
            <div className="chat-list">
                {chats.map((chat) => (
                    <Link to={`${chat.id}`} key={chat.id}>{chat.name}</Link>
                ))}

            </div>
            <div className='Delete'>
                <button onClick={() => deleteChat(chats.id)}>Удалить</button>
            </div>
            <Form onSubmit={handleSubmit} />
            <Outlet></Outlet>
        </div >
    );
};
