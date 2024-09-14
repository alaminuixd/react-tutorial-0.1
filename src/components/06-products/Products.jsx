import React from "react";
import "./Products.css";

function Products(props) {
  const products = props.products;
  return (
    <div className="products-container">
      {products &&
        products.map((product) => {
          const { id, title, price, description, category, image, rating } =
            product;
          return (
            <div key={id} className="product">
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <p>Type: {category}</p>
              <p>Price: {price}</p>
              <p>Rating : {rating.rate}</p>
              <p>Sold: {rating.count}</p>
              <p>{description}</p>
              <button>Add to cart</button>
            </div>
          );
        })}
    </div>
  );
}

export default Products;

/* const products = [{
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    }
}] */
