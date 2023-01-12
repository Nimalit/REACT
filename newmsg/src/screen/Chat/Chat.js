// import '../../App.css';
import { Message } from "../../components/Message/message";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChatList } from "../../components/Chat/ChatList";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { USER } from "../../extra/consts";
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectMessages, selectMessagesByChatId } from "../../store/messages/selectors";
import { addMessage, addMessageWithReply } from "../../store/messages/actions";


export function Chat() {
    const { id } = useParams();
    const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
    const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    const timeout = useRef();
    const wrapperRef = useRef();

    const sendMessage = (text) => {
        dispatch(
            addMessageWithReply(
                {
                    author: USER.users,
                    text,
                    id: `msg-${Date.now()}`,
                },
                id
            )
        );
    };

    if (!messages) {
        return <Navigate to="/сhat" replace />;
    }

    return (
        <div className='App'>
            <div className='heanderElem'>
                <MessageList messages={messages} />
                <Form onSubmit={sendMessage} />
            </div>
        </div>
    );
}
