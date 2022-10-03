const Header = ({ logo, listNavBar }) => {
  const abc = () => {
    alert("Xin chào quý khách");
  };
  return (
    <div className="nav">
      <img className="logo" src={logo} width="100px" />
      <ul className="list">
        {listNavBar.map((item, index) => {
          return (
            <li onClick={abc} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
      <div className="icon-logo">
        <p>logo1</p>
        <p>logo2</p>
        <p>logo3</p>
      </div>
    </div>
  );
};
export default Header;
