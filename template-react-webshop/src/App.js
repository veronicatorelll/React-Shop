// Using font awsome icons. Use npm i react-icons to show icons.

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, {useEffect, useState} from "react" 
import Header from './components/Header';
import Products from './pages/Products';
import Product from "./pages/Product"
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';


function App() {

// ---------- Cart State ---------------------
  const [cartProducts, setCartProducts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/electronics.php');
            const data = await response.json();
            console.log(data);
            
            setCartProducts(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchData();
    }, [])

// ---------- Add to Cart ---------------------
     const addToCart = id => {
      
       console.log(id)
       setCartProducts(cartProducts.map((product) => product.id === id
       ? {...product, cart: true}
       : product
     ))
     console.log(cartProducts)
     }

// ---------- Delete from Cart ---------------------
      const removeFromCart = id => {
        console.log(id)
        setCartProducts(cartProducts.map((product) => product.id === id
        ? {...product, cart: false}
        : product
      ))
      }



  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Products addToCart={addToCart}/>} />
          <Route path="/product/:testid" element={<Product />} />
          <Route path="/Cart" element={<Cart cartProducts={cartProducts} />}/> 
          <Route path="/Checkout" element={<Checkout />}/> 

         


        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
