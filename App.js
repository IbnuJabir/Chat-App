import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ChatList from './pages/ChatList';
import InChat from './pages/In-Chat';
import ShowNavBar from './pages/ShowNavBar';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <div className="App">
      <ShowNavBar>
          <Navbar />
      </ShowNavBar>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/ChatList" element={<ChatList />} />
            <Route path="/InChat"element={<InChat />} />
          </Routes>
    </div>
    </>
  );
}

export default App;
