// import { ListItem } from '@mui/material';
// import { List } from '@mui/material';
import { useSelect } from '@mui/base';
import { chainPropTypes } from '@mui/utils';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { Chat, chat } from '../../screen/Chat/Chat';
import { addChat, deleteChat } from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';
import { clearMessages, initMessagesForChat } from '../../store/messages/actions';
import { Form } from '../Form/Form';
import './ChatList.style.css';


export const ChatList = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };

        dispatch(addChat(newChat));
        dispatch(initMessagesForChat(newChat.id));
    };

    const handleRemoveChat = (id) => {
        dispatch(deleteChat(id));
        dispatch(clearMessages(id));
    };


    return (
        <>
            < div className="chat_first" >
                <div className="chat-list">
                    {chats.map((chat) => (
                        <Link to={`/chat/${chat.id}`} key={chat.id}>{chat.name}</Link>))}
                    < div className='Delete' >
                        <button onClick={() => handleRemoveChat(Chat.id)}>Удалить</button>
                    </div>
                </div>
                <Form onSubmit={handleSubmit} />
                <Outlet></Outlet>
            </div >
        </>
    );
};
