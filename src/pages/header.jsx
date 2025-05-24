export default function Header({ setMenuOpen, menuOpen }) {
  return (
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
  );
}
