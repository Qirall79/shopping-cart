import React from "react";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="box-border w-100 h-screen bg-[url('./images/bg-apple.jpg')] bg-cover overflow-x-hidden ">
      <Navbar />
      <div className="w-100 h-[800px] px-8 md:px-20 xl:px-24 pt-52 ">
        <a
          className="px-12 py-5 bg-white text-black font-semibold hover:text-lg hover:scale-125 transition-all duration-400"
          href="/catalog"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default App;
