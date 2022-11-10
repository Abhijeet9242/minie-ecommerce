import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'; 
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Order from './components/Orders';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/orders" element ={<Order/>}/>
      </Routes>
    </div>
  );
}

export default App;
