import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Products from './pages/Products';
import Product from "./pages/Product"
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:testid" element={<Product />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
