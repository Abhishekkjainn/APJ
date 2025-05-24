import { useState, useEffect, use } from 'react';
import './App.css';
import MenuPage from './pages/menupage';

function App() {
  const [menuOpen, isMenuOpen] = useState(false);
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
            onClick={() => isMenuOpen(!menuOpen)}
          />
        </div>
      </div>
      <MenuPage isMenuOpen={isMenuOpen} menuOpen={menuOpen} />
    </>
  );
}

export default App;
