// import { ListItem } from '@mui/material';
// import { List } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import './ChatList.style.css';


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


export const ChatList = () =>
    <div className="chat_first">
        <div className="chat-list">
            {chats.map((chat) => (
                <Link to={`${chat.id}`} key={chat.id}>{chat.name}</Link>
            ))}
        </div>
        <Outlet></Outlet>
    </div>
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
