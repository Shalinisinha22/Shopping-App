import book from './book.jpg';
import laptop from './laptop.jpg';
import mobile from './mobile.jpg';
import saree from './saree.jpg';
import shirt from './shirt.jpg';
import * as actionTypes from './actions'

const initialState={
  products:[
    {
       id: 1,
       title:"The Power of the Will",
       description:"I have given utterance to most of the ideas that are scattered through these pages in addresses to working men, and in contributions to various journals. My views gradually took a more connected form, and then they constituted the material of alecture, which has been so well received by large audiences",
       price:1000,
       image:book

  },
  {
    id:2,
    title:"Laptop",
    description:"   This laptop can be a great tool for helping you in your studies. Being able to type up your notes and papers makes writing and editing easier, and it can help keep you organized. In addition, accessing the Internet puts you in touch with a world of information that can help you understand any subject.",
    price: 80000,
    image:laptop
  },
  {
    id:3,
    title:" Apple's iPhone 14",
    description:" This models feature an updated 12-megapixel front-facing camera with an ƒ/1.9 aperture that is designed to let in more light than before for improved selfies and FaceTime video calls. It also features autofocus for the first time, which also improves image quality, and low-light selfies are 2x better.",
    price: 100000,
    image:mobile
  },

  {
    id:4,
    title:"Saree",
    description:" If you are someone who loves premium and fine silk, then this Kanjeeveram saree is for you. These saree are characterized by the exceptional quality of silk that is used and their intricate weaving patterns. Also, these sarees use golden-silver thread that is known for the sheer elegance it imparts to the fabric.",
    price: 5000,
    image:saree
  },

  {
    id:5,
    title:"Shirts",
    description:" This linen cotton shirt is perfect for any occasion. It's made with a light-weight fabric that's perfect for warm weather, and the natural fibers make it breathable and comfortable. This linen cotton shirt is a great choice for dressing up for a special occasion or just needing a sharp-looking casual shirt.",
    price: 2000,
    image:shirt
  },


  ],
  currentItem:null,
  cart:[] 
}

const shopReducer=(state=initialState,action)=>{
  switch(action.type)
  {
    case actionTypes.ADD_TO_CART :
         const item=state.products.find((product)=>product.id==action.payload.id);//find product
         const inCart=state.cart.find((product)=>product.id==action.payload.id?true:false);//cart me hai ya nahi

         return{
          ...state,
             cart:inCart?
                  state.cart.map((product)=>product.id==action.payload.id?{...product,qty:product.qty + 1}:product)
                  : [...state.cart,{...item,qty:1}]//nahi hai to new bnaye
         }
      case actionTypes.LOAD_CURRENT_ITEM:
        return{
         ...state,
         currentItem:action.payload.item
        } 
      case actionTypes.UPDATE_QTY:
        return{
          ...state,
          cart:state.cart.map((product)=>product.id==action.payload.id?{...product,qty:action.payload.qty}:product)
        } 
       case actionTypes.REMOVE_FROM_CART:
        return{
          ...state,
          cart:state.cart.filter((product)=>product.id!==action.payload.id)
        }   
      default: return state;   
  
      }
  
    
}

export default shopReducer;

//add=>push product to cart,qty=1(if product, qty update),otherwise{qty}
//loadcurrentitem=>currentitem:product