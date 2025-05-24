import { useState } from 'react';
import './App.css';
import MenuPage from './pages/menupage';
import Bottombar from './pages/bottombar';
import Header from './pages/header';
import HomeScreen from './pages/homescreen';
import UpdatePrices from './pages/updateprices';
import AddProducts from './pages/addProducts';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  return (
    <>
      <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <MenuPage
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === 'home' && <HomeScreen />}
      {activeTab === 'price' && <UpdatePrices />}
      {activeTab === 'add' && <AddProducts />}
      {activeTab === 'users' && <UpdatePrices />}
      <Bottombar activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}

export default App;
