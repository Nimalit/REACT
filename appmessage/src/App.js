import logo from './logo.svg';
import './App.css';
import { Message } from "./components/Message/message";


function App() {
  return (
    <div className="App">
      <Message name="Aleksey" age={32} />
      </div>
  );
}

export default App;
