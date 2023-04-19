import './../App/_base.scss';
import './../App/_reset.scss';
import './../App/_vars.scss';
import './../sass/blocks/_section-cart.scss';

import Title from '../Title';
import Cart from '../Cart';

function App() {
return (
  <section className="section-cart">
 <header className="section-cart__header">
        <div className="container">
           <Title />
        </div>
    </header>
  <div className="section-cart__body">
      <div className="container">
     <Cart />
      </div>
     
  </div>
</section>
);
 
}

export default App;
