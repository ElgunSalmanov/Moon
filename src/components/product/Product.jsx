import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./product.scss";

function Product({ product }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="card">
        <img
          className="card-image"
          src={product.image}
          alt="moon product"
          data-aos="fade-up"
        />
        <h3 className="card-title" data-aos="fade-up">
          {product.title}
        </h3>
      </div>
    </>
  );
}

export default Product;
