// Using font awsome icons. Use npm i react-icons to show icons.

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, {useEffect, useState} from "react" 
import Header from './components/Header';
import Products from './pages/Products';
import Product from "./pages/Product"
import Footer from './components/Footer';
import Checkout from './pages/Checkout';
import Contact from "./components/Contact";
import About from "./components/About";
import {Global} from "./styles/styledGlobal"


function App() {

// ---------- Cart State ---------------------
  const [cartProducts, setCartProducts] = useState([]);
  
    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/electronics.php');
            const data = await response.json();
            
            setCartProducts(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchData();
    }, [])


  return (
    <div className="App">
      <BrowserRouter>
      <Global>
        <Header cartProducts={cartProducts} setCartProducts={setCartProducts}/>
        
        <Routes>
          <Route path="/" element={<Products cartProducts={cartProducts} setCartProducts={setCartProducts}/>} />
          <Route path="/product/:testid" element={<Product cartProducts={cartProducts}setCartProducts={setCartProducts} />} />
          <Route path="/Checkout" element={<Checkout cartProducts={cartProducts}setCartProducts={setCartProducts}/>} /> 
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/About" element={<About />} /> 
        </Routes>

        <Footer />
      </Global>
      </BrowserRouter>
    </div>
  );
}

export default App;
