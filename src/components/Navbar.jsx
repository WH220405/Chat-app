import nong from "../img/nong.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Hernandez chat</span>
      <div className="user">
        <img src={nong} alt="Profile" />
        <span>Gavin</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
