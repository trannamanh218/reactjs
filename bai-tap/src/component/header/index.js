const Header = ({ logo }) => {
    const abc = () => {
        alert("Xin chào quý khách")
    }
  return (
    <div class="nav">
      <img className="logo" src={logo} width="100px" />
      <ul class="list">
        <li onClick={abc}>Đồ nam</li>
        <li onClick={abc}>Đồ nữ</li>
        <li onClick={abc}>Phụ kiện</li>
        <li onClick={abc}>Tin tức</li>
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
