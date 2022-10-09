import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const prams = useParams();
  console.log(prams);
  const [isloading, setIsLoading] = useState(false);
  const [product, setProduct] = useState("");
  useEffect(() => {
    setIsLoading(true);
    try {
      axios({
        method: "get",
        url: `https://fakestoreapi.com/products/${prams.id}`,
      }).then(function (response) {
        setProduct(response.data);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  }, []);
  console.log(product)
  if (isloading == true) {
    return "loading...............";
  }
  return (
    <div>
      <img src={product.image} width="200px" />
      <h2>tên sản phẩm:{product.title}</h2>
      <h4>giá: {product.price}</h4>
      <h5>{product.description}</h5>
    </div>
  )
};
export default Detail;
