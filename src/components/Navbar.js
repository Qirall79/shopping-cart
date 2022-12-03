import { React } from "react";
import { Link } from "react-router-dom";

import Cart from "./Cart";

const Navbar = () => {
  const showCart = () => {
    const cart = document.getElementById("cart");
    cart.style.transform = "translateX(0px)";
  };

  return (
    <nav className="w-100 h-36 px-8 md:px-20 xl:px-24 py-8 flex justify-between bg-transparent items-center text-white relative  ">
      <Link
        to={"/"}
        className="mx-0 px-0 text-xl md:text-3xl uppercase font-bold"
      >
        Tofa7a Shop
      </Link>
      <ul className="w-1/2 md:w-1/3 flex justify-between">
        <li className=" cursor-pointer border-b-[2px] border-transparent hover:border-white transition-all duration-150">
          <Link to={"/catalog"}>Shop</Link>
        </li>
        <li className=" cursor-pointer border-b-[2px] border-transparent hover:border-white transition-all duration-150">
          Search
        </li>
        <li
          className=" cursor-pointer border-b-[2px] border-transparent hover:border-white transition-all duration-150"
          onClick={showCart}
        >
          Cart
        </li>
      </ul>
      <Cart />
    </nav>
  );
};

export default Navbar;
