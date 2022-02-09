import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import ProductImage from './components/ProductImage';
import ItemCounter from './components/ItemCounter';
import AddToCart from './components/AddToCart';
import Thumbnail from './images/image-product-1-thumbnail.jpg'

function App() {
  const [cartData, setCartData] = useState([
    {
      key: "a",
      name: "Fall Limited Edition Sneakers",
      price: "250",
      discount: "0.5",
      img: Thumbnail,
      quantity: "2"
    },
    {
      key: "b",
      name: "Fall Limited Edition Sneakers",
      price: "250",
      discount: "0.5",
      img: Thumbnail,
      quantity: "2"
    },
  ]);

  return (
    <div className="App">

      <Header cartData={cartData} />
      <ProductImage />

      <div id="lower-container">

        <h1 id='title'>Sneaker Company</h1>
        <Product
          name="Fall Limited Edition Sneakers"
          description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
          price="250"
          discount="0.5"
        />

        <ItemCounter />
        <AddToCart />

      </div>

    </div>
  );
}

export default App;
