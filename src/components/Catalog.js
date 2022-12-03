/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from "react";

import Navbar from "./Navbar";
import Card from "./Card";

const Catalog = (props) => {
  let key = 0;
  const [prods, setProds] = useState(props.products);

  const filterHandler = (e) => {
    const filter = e.target.getAttribute("id");
    let copy = props.products.filter((element) => {
      return element.type === filter;
    });
    setProds(copy);
  };

  return (
    <div className="box-border w-100 min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <div className="w-100 min-h-[850px] grid grid-rows-1 px-8 md:px-20 xl:px-24 py-24 grid-cols-[1fr_4fr]">
        <div className="flex flex-col gap-24">
          <h2 className=" text-xl md:text-2xl font-semibold">All Products</h2>
          <ul className="flex flex-col gap-6 pl-3">
            <li>
              <a
                onClick={filterHandler}
                id="macbook"
                className="border-b-[2px] border-transparent hover:border-white transition-all duration-150 cursor-pointer"
              >
                Macbook
              </a>
            </li>
            <li>
              <a
                onClick={filterHandler}
                id="iphone"
                className="border-b-[2px] border-transparent hover:border-white transition-all duration-150 cursor-pointer"
              >
                iPhone
              </a>
            </li>
            <li>
              <a
                onClick={filterHandler}
                id="iwatch"
                className="border-b-[2px] border-transparent hover:border-white transition-all duration-150 cursor-pointer"
              >
                iWatch
              </a>
            </li>
          </ul>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 content-center gap-12">
          {prods.map((product) => {
            return <Card infos={product} productId={product.id} key={key++} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
