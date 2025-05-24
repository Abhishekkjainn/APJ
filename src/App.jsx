import { useState } from 'react';
import './App.css';
import MenuPage from './pages/menupage';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    </>
  );
}

export default App;
