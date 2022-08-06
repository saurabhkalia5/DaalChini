import './App.css';
import Body from './components/body';
import Cart from './components/cart';
import Navbar from './components/navBar';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import CheckOut from './components/checkOut';
import Confirmation from './components/confirmation';
import CheckOutTwo from './components/checkOut2';



function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
    <Route path="/" element={<Body/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/checkout" element={<CheckOut/>}/>
    <Route path="/confirmation" element={<Confirmation/>}/>
    <Route path="/checkouttwo" element={<CheckOutTwo/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
