import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import ProductImage from './components/ProductImage';
import ItemCounter from './components/ItemCounter';
import AddToCart from './components/AddToCart';
import Thumbnail from './images/image-product-1-thumbnail.jpg'
import cartJsonData from './cartData';

function App() {
  const [cartData, setCartData] = useState(cartJsonData);
  const [count, setCount] = useState(0);


  const addItem = () => {
    console.log(cartData)
    let foundExistingItem = false;
    let newData = cartData.map(item => {
      console.log(item)
      if (item.id === "1") {
        item.quantity = Number(item.quantity) + count;
        foundExistingItem = true;
      }
      return item;
    })
    if (foundExistingItem == false) {
      newData.push({
        key: "4",
        name: "New Limited Edition Sneakers",
        price: "200",
        discount: "0.5",
        img: Thumbnail,
        quantity: count
      })
    }

    setCartData(newData);
  }

  const removeItem = (e) => {
    const id = e.target.parentNode.getAttribute("data-id");
    const newCart = cartData.filter((item) => {
      return item.id !== id
    });
    setCartData(newCart);
  }

  const modifyCount = (num) => (e) => {
    if (count + num >= 0) setCount(count + num);
  }

  return (
    <div className="App">

      <Header cartData={cartData} removeItem={removeItem} />
      <ProductImage />

      <div id="lower-container">

        <h1 id='title'>Sneaker Company</h1>
        <Product
          id="1"
          name="Fall Limited Edition Sneakers"
          description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
          price="250"
          discount="0.5"
        />

        <ItemCounter modifyCount={modifyCount} count={count} />
        <AddToCart addItem={addItem} />

      </div>

    </div>
  );
}

export default App;
