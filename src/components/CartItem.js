import { React, useState } from "react";

const CartItem = ({ product, removeProduct }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const changeQuantity = (e) => {
    const sign = e.target.getAttribute("id");
    const newCart = JSON.parse(localStorage.getItem("cart"));

    if (sign === "+") setQuantity(quantity + 1);
    else setQuantity(quantity === 1 ? 1 : quantity - 1);
    for (let key in newCart) {
      if (newCart[key].id === product.id) {
        newCart[key].quantity = quantity;
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = () => {
    const item = document.getElementById(`item-${product.id}`);
    item.style.display = "none";
    removeProduct(product.id);
  };

  return (
    <div id={"item-" + product.id} className="w-100 h-[120px] flex mb-8 ">
      <div className="w-[120px] h-[120px] bg-slate-300 flex justify-center items-center mr-8">
        <img className="w-[100px]" src={product.src} alt="product" />
      </div>
      <div className="h-100 py-1 flex flex-col justify-between">
        <h3 className="text-md font-bold">{product.name}</h3>
        <div className="w-24 flex justify-between text-sm font-semibold items-center ">
          <span
            onClick={changeQuantity}
            id="-"
            className="cursor-pointer flex justify-center items-center hover:bg-slate-200 text-black w-8 h-8 rounded-[50%] bg-slate-300 transition-all duration-150"
          >
            -
          </span>
          <span>{quantity}</span>
          <span
            onClick={changeQuantity}
            id="+"
            className="cursor-pointer flex justify-center items-center hover:bg-slate-200 text-black w-8 h-8 rounded-[50%] bg-slate-300 transition-all duration-150"
          >
            +
          </span>
        </div>
        <h3 className="h-100 font-semibold ">
          {"$" + parseInt(product.price) * quantity}
        </h3>
      </div>
      <div className="h-100 w-12 font-extrabold flex justify-end">
        <h4 onClick={removeItem} className=" cursor-pointer ">
          X
        </h4>
      </div>
    </div>
  );
};

export default CartItem;
