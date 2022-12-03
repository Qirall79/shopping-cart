import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Catalog from "./components/Catalog";
import Product from "./components/Product";

import images from "./components/productsImages";

const products = [
  {
    name: "Macbook Pro 16-inch",
    price: 1999,
    id: 1,
    src: images.macbookPro14,
    type: "macbook",
  },
  {
    name: "MacBook Air with M1",
    price: 999,
    id: 2,
    src: images.macbookM1,
    type: "macbook",
  },
  {
    name: "MacBook Air with M2",
    price: 1199,
    id: 3,
    src: images.macbookM2,
    type: "macbook",
  },
  {
    name: "MacBook Pro 13-inch",
    price: 1299,
    id: 4,
    src: images.macbookPro13,
    type: "macbook",
  },
  {
    name: "Apple Watch Hermès",
    price: 1229,
    id: 5,
    src: images.watchHermes,
    type: "iwatch",
  },
  {
    name: "Apple Watch SE",
    price: 249,
    id: 6,
    src: images.watchSe,
    type: "iwatch",
  },
  {
    name: "Apple Watch Series 8",
    price: 399,
    id: 7,
    src: images.watch8,
    type: "iwatch",
  },
  {
    name: "Apple Watch Ultra",
    price: 799,
    id: 8,
    src: images.watchUltra,
    type: "iwatch",
  },
  {
    name: "iPhone 14 Pro Max",
    price: 999,
    id: 9,
    src: images.iphone14Max,
    type: "iphone",
  },
  {
    name: "iPhone 14 Plus",
    price: 799,
    id: 10,
    src: images.iphone14Plus,
    type: "iphone",
  },
  {
    name: "iPhone 12",
    price: 599,
    id: 11,
    src: images.iphone12,
    type: "iphone",
  },
  {
    name: "iPhone 13",
    price: 699,
    id: 12,
    src: images.iphone13,
    type: "iphone",
  },
];

const RouteSwitch = () => {
  return (
    <BrowserRouter basename="/shopping-cart">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalog" element={<Catalog products={products} />} />
        <Route
          path="/product/:productId"
          element={<Product products={products} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
