import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Product from './/Product/Product';


import './Products.css'

import { connect } from 'react-redux';

 function Products({products}) {
  console.log(products[0].image)
  return (
     <div className="productsContainer">
     
      {
        products.map((product)=>(
          <Product key={product.id} product={product} ></Product>  
        ))
      }
     
   

    </div>

  
   
  );

}
const mapStateToProps=(state)=>{
  return{
    products: state.products
  } 
}
export default (connect(mapStateToProps))(Products)
