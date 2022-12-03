import { React, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "./Navbar";

const Product = (props) => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = props.products[productId - 1];

  const addItem = () => {
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    let newCart;
    let exists = -1;
    for (let p in cart) {
      if (cart[p].id === product.id) {
        exists = p;
        break;
      }
    }
    if (exists !== -1) {
      newCart = [...cart];
      newCart[exists].quantity += quantity;
    } else newCart = [...cart, { ...product, quantity }];

    localStorage.setItem("cart", JSON.stringify(newCart));
    console.log(newCart);
  };

  const changeQuantity = (e) => {
    const sign = e.target.getAttribute("id");
    if (sign === "+") setQuantity(quantity + 1);
    else setQuantity(quantity === 1 ? 1 : quantity - 1);
  };

  return (
    <div className="box-border w-100 min-h-screen bg-black text-white  overflow-x-hidden">
      <Navbar />
      <div className="w-100 h-[800px] px-8 md:px-20 xl:px-24 py-8 grid lg:grid-cols-[3fr_1fr] grid-cols-1">
        <div className="flex flex-col justify-center items-center pt-8 ">
          <h1 className=" text-lg lg:text-2xl font-bold mb-4 lg:mb-16">
            {product.name}
          </h1>
          <img src={product.src} alt="product" className=" w-[750px] " />
        </div>
        <div className="border border-slate-400 h-100 flex flex-col gap-y-8 justify-between items-center pb-8 lg:pb-48">
          <div className="flex flex-col items-center pt-8 ">
            <p className="text-2xl font-semibold mb-8">{"$" + product.price}</p>
            <div className="w-36 flex justify-between text-xl font-bold items-center ">
              <span
                id="-"
                onClick={changeQuantity}
                className="cursor-pointer flex justify-center items-center bg-white text-black w-12 h-12 rounded-[50%] hover:bg-slate-300 transition-all duration-150"
              >
                -
              </span>
              <span>{quantity}</span>
              <span
                id="+"
                onClick={changeQuantity}
                className="cursor-pointer flex justify-center items-center bg-white text-black w-12 h-12 rounded-[50%] hover:bg-slate-300 transition-all duration-150"
              >
                +
              </span>
            </div>
          </div>

          <button
            className="px-10 py-4 bg-white text-black rounded-md font-semibold hover:bg-slate-300 transition-all duration-150 "
            onClick={addItem}
          >
            <Link to={"/catalog"}>Add to Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
