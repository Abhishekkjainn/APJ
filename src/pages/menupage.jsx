export default function MenuPage({
  setMenuOpen,
  menuOpen,
  activeTab,
  setActiveTab,
}) {
  const handleMenuClick = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };
  return (
    <div className={`menupage ${menuOpen ? 'menuopen' : 'menuclosed'}`}>
      <div className="menutop">
        <div className="menuhead">Menu</div>
        <div className="menuclose">
          <img
            src="/close.png"
            alt=""
            className="closeicon"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      </div>
      <div className="menuitems">
        <div className="menuitem item1" onClick={() => handleMenuClick('home')}>
          <img src="/home.png" alt="Home Icon" className="itemicon" />
          <div className="itemtag">Home</div>
        </div>

        <div
          className="menuitem item1"
          onClick={() => handleMenuClick('price')}
        >
          <img src="/price.png" alt="Price Icon" className="itemicon" />
          <div className="itemtag">Update Prices</div>
        </div>

        <div className="menuitem item1" onClick={() => handleMenuClick('add')}>
          <img src="/add.png" alt="Add Icon" className="itemicon" />
          <div className="itemtag">Add Products</div>
        </div>

        <div
          className="menuitem item1"
          onClick={() => handleMenuClick('users')}
        >
          <img src="/user.png" alt="User Icon" className="itemicon" />
          <div className="itemtag">Manage Users</div>
        </div>

        <div className="menuitem item1" onClick={() => handleLogout()}>
          <img src="/exit.png" alt="Logout Icon" className="itemicon" />
          <div className="itemtag">Logout</div>
        </div>
      </div>
    </div>
  );
}
