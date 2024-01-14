import './App.css';
import Navigation from './Navigation.js'
import CreateProduct from "./CreateProduct.js"
import Home from "./Home.js"
import Details from './Details.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Cart.js";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
function App() {
  const {color} = useSelector((state) => state.theme);
  const [isDark, setisDark] = useState(true);
  useEffect(()=>{
    if (color === "dark") {
      setisDark(true);
    }
    else{
      setisDark(false);
    }
    
  },[color])
  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>
    <Router>
      <ToastContainer />
        <header >
          <Navigation />
        </header>
        <Routes>
          <Route exact path = "/" element={<div className='body'><section ><Home /> </section></div>}></Route>
          <Route exact path = "/Details/:id" element={<div className='body' ><section ><Details /> </section></div>}></Route>
          <Route exact path = "/CreateProduct" element={<div className='body'><section ><CreateProduct /> </section></div>}></Route>
          <Route exact path = "/Cart" element={<Cart />}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
