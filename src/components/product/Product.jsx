import "./product.scss";

function Product({ product }) {
  return (
    <>
      <div className="card">
        <img className="card-image" src={product.image} alt="moon product" />
        <h3 className="card-title">{product.title}</h3>
      </div>
    </>
  );
}

export default Product;
