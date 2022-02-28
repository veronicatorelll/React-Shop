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
import ProductList from "./ProductList";
import TestForm from "./TestForm";
import Test from "./Test";


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




  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:testid" element={<Product />} />
          <Route path="/Cart" element={<Cart cartProducts={cartProducts}/>}/> 
          <Route path="/Checkout" element={<Checkout />} /> 
          <Route path="/ProductList" element={<ProductList />} /> 
          <Route path="/TestForm" element={<TestForm />} /> 
          <Route path="/Test" element={<Test />} /> 

         


        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
