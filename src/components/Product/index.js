import Count from '../Count';
import Delete from '../Delete';
import './style.scss';


const Product = ({product, deleteProduct, increase}) => {
    const {id, img, title, price, count} = product;
    return ( 
<section className="product">
                  <div className="product__img"><img src={`../img/products/${img}`}  alt="Apple MacBook Air 13"></img></div>
                  <div className="product__title">{title}</div>
                  <div className="product__count">
                     <Count count={count} increase = {increase} id = {id}/>
                  </div>
                  <div className="product__price">{price} руб.</div>
                  <div className="product__controls">
                      <Delete deleteProduct={deleteProduct} id={id}/>
                  </div>
              </section>
     );
}
 
export default Product;