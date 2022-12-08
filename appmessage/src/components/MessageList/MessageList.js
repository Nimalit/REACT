import {Message} from "../Message/message";

export const MessageList=({messages})=>
messages.map((msg)=><Message text={msg.text} author={msg.author} />);