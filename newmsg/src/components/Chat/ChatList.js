import { ListItem } from '@mui/material';
import './ChatList.style.css';


const chats = [
    {
        name: "YAR",
        id: "yar"
    },
    {
        name: "BRO",
        id: "bro",
    },
    {
        name: "Special",
        id: "special"
    },
];


export const ChatList = () =>
    <list className="chat-list">
        {chats.map((chat) => (
            <ListItem key={chat.id}>{chat.name}</ListItem>
        ))}
    </list >

// export default function GutterlessList() {
//     return (
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             {[1, 2, 3].map((value) => (
//                 <ListItem
//                     key={value}
//                     disableGutters
//                     secondaryAction={
//                         <IconButton aria-label="comment">
//                         </IconButton>
//                     }
//                 >
//                     <ListItemText primary={`Line item ${value}`} />
//                 </ListItem>
//             ))}
//         </List>
//     );
// }
