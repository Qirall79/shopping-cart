import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link className="flex justify-center" to={"/product/" + props.productId}>
      <div className="max-w-[330px] h-[380px] pb-4 bg-white flex flex-col justify-between text-black rounded-xl">
        <div className="w-100 h-[80%] flex justify-center items-center">
          <img
            alt="product"
            src={props.infos.src}
            className="w-4/5 hover:w-11/12 transition-all duration-200"
          />
        </div>

        <h3 className="pl-8 text-xl font-bold">{props.infos.name}</h3>
        <p className="pl-8">{"$" + props.infos.price}</p>
      </div>
    </Link>
  );
};

export default Card;
