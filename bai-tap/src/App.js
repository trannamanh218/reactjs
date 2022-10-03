import "./App.css";
import Footer from "./component/footer";
import Header from "./component/header";
import Main from "./component/main";

function App() {
  const logo ="https://inkythuatso.com/uploads/thumbnails/800/2021/09/logo-adidas-vector-inkythuatso-01-29-09-08-58.jpg";
  const coverImg = "https://m.media-amazon.com/images/S/abs-image-upload-na/b/AmazonStores/ATVPDKIKX0DER/642644947bd8182cd673865f6b82a1fa.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.jpg";
  const productItem = [
    {
      img: "https://bizweb.dktcdn.net/thumb/large/100/378/584/products/z-fx9294-standard-side-lateral-center-view.jpg",
      name: "GIÀY CHẠY BỘ ADIDAS 4DFWD 2",
      piece: "2.000.000Đ"
    },
    {
      img: "https://cf.shopee.vn/file/ebe57ecae50a9a800337e1b8bd08190f",
      name: "GIÀY DAME EXTPLY 2.0",
      piece: "2.500.00Đ"
    },
    {
      img: "https://bizweb.dktcdn.net/100/446/588/products/036a3a0245de457b8a5170822825e6.jpg?v=1643186769267",
      name: "GIÀY NMD_V3",
      piece: "8.000.000Đ"
    },
    {
      img: "https://www.chuphinhsanpham.vn/wp-content/uploads/2021/06/chup-hinh-giay-dincox-shoes-c-photo-studio-4.jpg",
      name: "GIÀY 4D FUTURECRAFT",
      piece: "10.000.00Đ"
    }
  ];
  const listNavBar = ["đồ nam", "đồ nữ", "danh sách", "phụ kiện"]
  return (
    <div className="container">
      <Header logo={logo} listNavBar = {listNavBar}/>
      <Main coverImg = {coverImg} 
       productItem = {productItem}/>
      <Footer />
    </div>
  );
}

export default App;
