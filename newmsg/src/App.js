
import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { Chat } from "./screen/Chat/Chat";
import { ChatList } from './components/Chat/ChatList';
import { Home } from "./screen/Home/home";
import { Profile } from './screen/Profile/profile';
import { Articles } from './screen/Artictles/Articles';

function App() {

  return (
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
        <li>
          <NavLink to="/Articles"
            style={({ isActive }) => ({ color: isActive ? "g#e1ff1f" : "#000" })}
          >Articles</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/chat" element={<ChatList />}>
          <Route path=":id"
            element={<Chat />} />
        </Route>
        <Route path='*' element={<h1>404 ,что то пошло не так!!!</h1>} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
