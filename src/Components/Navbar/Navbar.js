import  React from 'react';
import { useState,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


import './Navbar.css'
import { connect } from 'react-redux';
 function Navbar2({cart=[]}) {
  const [cartCount , setCartCount]=useState(0);
useEffect(()=>{
  let count=0;

  cart.forEach((item)=>{

     count= count +  Number(item.qty)
     
  })

  setCartCount(count)

},[cart,setCartCount])
  return (
    <>
   
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" style={{backgroundColor:"#9b59b6"}}>
        <Toolbar>
        
          <Typography variant="h4" component="div" sx={{ flexGrow:1 }}style={{marginRight:"30%"}}>
            <Link to="/" style={{textDecoration:"none",color:"white"}}>
            Shopping App
            </Link>
           
          </Typography>
          <Link to='/cart' style={{color:'white'}}>
            <Button color="inherit">Cart<ShoppingCartIcon style={{marginLeft:'15%', marginRight:'15%'}}/><span className='cartNumber' style={{}}>{cartCount}</span></Button>
           </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>
    
  );
}

const mapStateToProps=(state)=>{
  return {
    cart:state.cart
  }
}
export default connect(mapStateToProps) (Navbar2)
