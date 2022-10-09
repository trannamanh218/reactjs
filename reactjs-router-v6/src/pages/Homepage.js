import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [api, setApi] = useState("");
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      }).then(function (response) {
        setApi(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(api);
  return (
    <div className="wap-container">
      <div className="item-box">
        {api &&
          api.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="image">
                  <img src={item.image} width="50%" />
                </div>
                <div className="box-text">
                  <Link to={`Product/${item.id}`}>
                    <h3 className="title">{item.title}</h3>
                  </Link>
                  <h3 className="price">{item.price}$</h3>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Homepage;
