import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import ProductImage from './components/ProductImage';
import ItemCounter from './components/ItemCounter';
import AddToCart from './components/AddToCart';
import Thumbnail from './images/image-product-1-thumbnail.jpg'

function App() {
  const [cartData, setCartData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/cart')
      .then(res => res.json())
      .then(cart => setCartData(cart))
  }, []);

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
        id: "4",
        name: "New Limited Edition Sneakers",
        price: "200",
        discount: "0.5",
        img: Thumbnail,
        quantity: count
      })
    }

    setCartData(newData);
    updateCartJson(newData);
  }

  const removeItem = (e) => {
    const id = e.target.parentNode.getAttribute("data-id");
    const newCart = cartData.filter((item) => {
      return item.id !== id
    });
    setCartData(newCart);
    updateCartJson(newCart);
  }

  async function updateCartJson(data) {
    const results = await fetch('http://localhost:3001/cart',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    const content = await results.json();
    console.log(content);
  }

  const modifyCount = (num) => (e) => {
    if (count + num >= 0) setCount(count + num);
  }

  return (
    <div className="App">

      <Header cartData={cartData} removeItem={removeItem} />

      <main id="main">
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

          <div className='flex' id='count-add-container'>
            <ItemCounter modifyCount={modifyCount} count={count} />
            <AddToCart addItem={addItem} />
          </div>

        </div>
      </main>


    </div>
  );
}

export default App;
