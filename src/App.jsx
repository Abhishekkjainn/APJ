import { useState } from 'react';
import './App.css';
import MenuPage from './pages/menupage';
import Bottombar from './pages/bottombar';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  return (
    <>
      <div className="header">
        <div className="greeting">
          <div className="greetingtop">Welcome</div>
          <div className="greetingbottom">Abhishek Jain</div>
        </div>
        <div className="menu">
          <img
            src="/menu.png"
            alt=""
            className="menuicon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>
      <MenuPage setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Bottombar activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}

export default App;
