import { useState } from 'react';
import './App.css';
import MenuPage from './pages/menupage';
import Bottombar from './pages/bottombar';
import Header from './pages/header';
import HomeScreen from './pages/homescreen';
import UpdatePrices from './pages/updateprices';
import AddProducts from './pages/addProducts';
import ManageUsers from './pages/manageUsers';
import Loading from './pages/loading';
import Carousel from './pages/carousel';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setLoading] = useState(false);
  return (
    <>
      {isLoading && <Loading isLoading={isLoading} setLoading={setLoading} />}
      <Carousel />
      <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <MenuPage
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === 'home' && (
        <HomeScreen isLoading={isLoading} setLoading={setLoading} />
      )}
      {activeTab === 'price' && (
        <UpdatePrices isLoading={isLoading} setLoading={setLoading} />
      )}
      {activeTab === 'add' && (
        <AddProducts isLoading={isLoading} setLoading={setLoading} />
      )}
      {activeTab === 'users' && (
        <ManageUsers isLoading={isLoading} setLoading={setLoading} />
      )}
      <Bottombar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoading={isLoading}
        setLoading={setLoading}
      />
    </>
  );
}

export default App;
