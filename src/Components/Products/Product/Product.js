import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as actionTypes from '../../../redux/actions';
import {useNavigate} from "react-router-dom";



import './Product.css';
import { connect } from 'react-redux';

function Product({product,addToCart,loadCurrentItem}) {
  const navigate = useNavigate();
    // console.log(product.image)
    const handleOnClick=()=>{
   
      navigate(`/product/${product.id}`);
     

      loadCurrentItem(product);
    }
  return (
    
     <>
<Card  className="product" >
 <CardMedia
   
   height="350"
   component="img"
   image={product.image}
   title={product.title}
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
   {product.title}
   </Typography>
   <Typography variant="body2" color="text.secondary" component="p" align="justify">
    {product.description}
   </Typography>
   <Typography align='center'>
       <div className="price">
           {product.price}
       </div>
   </Typography>
 </CardContent>
 <CardActions className='action'>
   <Button onClick={handleOnClick} size="small">View Item</Button>
   <Button onClick={()=>addToCart(product.id)} size="small">Add to Cart</Button>
 </CardActions>
</Card>

</>
    
  )
}

const mapDispatchToProps=(dispatch)=>{
  return {
   loadCurrentItem:(item)=> dispatch({type:actionTypes.LOAD_CURRENT_ITEM,payload:{item:item}}),
   addToCart:(id)=>dispatch({type:actionTypes.ADD_TO_CART,payload:{id:id}})
  }
}

export default (connect(null,mapDispatchToProps))(Product)
