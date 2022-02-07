import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import ProductImage from './components/ProductImage';
import ItemCounter from './components/ItemCounter';
import AddToCart from './components/AddToCart';

function App() {
  return (
    <div className="App">
      <Header />
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
