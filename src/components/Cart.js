/* eslint-disable eqeqeq */
import { React, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );

  const removeProduct = (id) => {
    let copy = products;
    for (let i in products) {
      if (products[i].id === id) {
        copy.splice(i, 1);
        setProducts(copy);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(products));
  };

  const hideCart = () => {
    const cart = document.getElementById("cart");
    cart.style.transform = "translateX(500px)";
  };
  return (
    <div
      id="cart"
      className="px-8 md:px-16 py-16 transition-transform duration-300 max-w-[500px] md:w-[500px] min-h-screen bg-white absolute top-0 right-0 text-black flex flex-col z-10 translate-x-[500px] shadow-2xl"
    >
      <div className=" w-100 h-[150px] flex justify-between text-2xl font-semibold">
        <h2>
          This is Your
          <br /> Shopping Cart
        </h2>
        <h2 className="cursor-pointer font-extrabold " onClick={hideCart}>
          X
        </h2>
      </div>
      <div>
        {products == false ? (
          <h2 className="font-semibold">There are no products here :(</h2>
        ) : (
          products.map((product) => {
            return <CartItem product={product} removeProduct={removeProduct} />;
          })
        )}
      </div>
      <button
        className={
          "px-12 py-5 bg-black text-white font-semibold hover:text-lg hover:scale-110 transition-all duration-400" +
          (products == false ? " invisible" : "")
        }
      >
        <Link to={"/"}>Check-Out</Link>
      </button>
    </div>
  );
};

export default Cart;
