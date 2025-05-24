export default function MenuPage({ setMenuOpen, menuOpen }) {
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
    </div>
  );
}
