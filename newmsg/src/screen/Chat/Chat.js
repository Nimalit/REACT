// import '../../App.css';
import { Message } from "../../components/Message/message";
import { useEffect, useRef, useState } from "react";
import { ChatList } from "../../components/Chat/ChatList";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { USER } from "../../extra/consts";
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectMessages } from "../../store/messages/selectors";
import { addMessage } from "../../store/messages/actions";


export function Chat() {
    const { id } = useParams();
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();

    const timeout = useRef();
    const wrapperRef = useRef();

    const sendMessage = (text) => {
        dispatch(
            addMessage(
                {
                    author: USER.users,
                    text,
                    id: `msg-${Date.now()}`,
                },
                id
            )
        );
    };

    useEffect(() => {
        const lastMessage = messages[id]?.[messages[id]?.length - 1];
        // let timeout;
        if (lastMessage?.author === USER.users) {
            // timeout = setTimeout(() => {
            timeout.current = setTimeout(() => {
                dispatch(
                    addMessage(
                        {
                            author: USER.bot,
                            text: 'Привет мой друг',
                            id: `msg-${Date.now()}`,
                        },
                        id
                    )
                );
            }, 1000);
        }

        return () => {
            clearTimeout(timeout.current);
        };
    }, [messages]);

    if (!messages[id]) {
        return <Navigate to="/сhat" replace />;
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
