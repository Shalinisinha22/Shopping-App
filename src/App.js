import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar.js';
import Cart from './Components/Cart/Cart.js';
import Products from './Components/Products/Products';
import SingleItem from './Components/Singleitem/SingleItem';
import { BrowserRouter as Router, Routes, Route ,Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Navigate } from 'react-router-dom';





function App({current}) {

  return (
 

     
        <Router>
           <div className="app">
        <Navbar />
        <Routes>
       
          <Route exact path="/" element={<Products></Products>} />
          <Route exact path="/cart" element={<Cart></Cart>} />
       
          </Routes>
 
           {current ? 
          <Routes>
           <Route exact path="/product/:id" element={<SingleItem></SingleItem>}/> </Routes>
          
           : 
         
         null
          
           
          } 
         
          {/* <Route exact path="/product/:id" element={<SingleItem></SingleItem>}/>
          </Routes> */}
      </div>
    
        </Router>
      
  
   
   
   
  
 
   
  );
}
const mapStateToProps = (state) => {
  return{
    current : state.currentItem
  }
}

export default connect(mapStateToProps)(App)
