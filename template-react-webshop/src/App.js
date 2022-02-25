import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Products from './pages/Products';
import Product from "./pages/Product"
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:testid" element={<Product />} />
          <Route path="/Cart" element={<Cart />} /> 
          {/* Får inte cart-länk att funka/V */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
