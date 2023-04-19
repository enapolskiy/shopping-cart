import { useState } from "react";
import CartHeader from "./../CartHeader/index";
import Footer from "./../Footer/index";
import Product from './../Product/index';
import data from './../data'


const Cart = () => {
  const [cart, setCart] = useState(data)
  const deleteProduct = (id) => {
  setCart(() => cart.filter((product) => id !== product.id))  
  }

  const increase = (id) => {
    console.log('+', id);
  }


  const products = cart.map((product) => {
    return <Product product = {product} key = {product.id} 
    deleteProduct = {deleteProduct} 
    increase = {increase} /> 
  })
    return ( 
        <section className="cart">
            <CartHeader />
            {products}
            <Footer />
          </section>
     );
}
 
export default Cart;