const Main = ({ coverImg, productItem }) => {
  return (
    <div>
      <img src={coverImg} width="100%" />
      <h2 className="titleproduct">sản phẩm bán chạy</h2>
      <div className="danhsach">
        {productItem.map((items, index) => {
          console.log(items, index);
          return (
            <div className="listproduct" key={index}>
              <img src={items.img} />
              <h2>{items.name}</h2>
              <h3>Giá: {items.piece}</h3>
            </div>
          );
        })}
      </div>
      <div className="danhsach">
        {productItem.map((items, index) => {
          console.log(items, index);
          return (
            <div className="listproduct" key={index}>
              <img src={items.img} />
              <h2>{items.name}</h2>
              <h3>Giá: {items.piece}</h3>
            </div>
          );
        })}
      </div>
      <div className="danhsach">
        {productItem.map((items, index) => {
          console.log(items, index);
          return (
            <div className="listproduct" key={index}>
              <img src={items.img} />
              <h2>{items.name}</h2>
              <h3>Giá: {items.piece}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Main;
