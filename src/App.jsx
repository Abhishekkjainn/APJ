import { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="header">
        <div className="greeting">
          <div className="greetingtop">Welcome</div>
          <div className="greetingbottom">Abhishek Jain</div>
        </div>
        <div className="menu">
          <img src="/menu.png" alt="" className="menuicon" />
        </div>
      </div>
    </>
  );
}

export default App;
