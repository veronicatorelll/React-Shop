import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
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
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:testid" element={<Product />} />
          <Route path="/Cart" element={<Cart />} /> 
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
