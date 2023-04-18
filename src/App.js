import './App.css';
import Header from './components/header';
import { useState,useEffect } from 'react';
import Product from './components/Product';
import products from './products.json'
import Basket from './components/Basket';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [money ,setMoney] = useState(1000000);
  const [basket,setBasket] = useState([]);
  const [total,setTotal] = useState(0)
  
  useEffect(()=> {
    setTotal(
      basket.reduce((acc,item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    } , 0))
    

  }, [basket])

  const resetBasket =() => {
    setBasket([])
  }

  return (

    <>
      <Header total={total} money={money} />
      <div className='bg-dark w-100 px-5 row'>
      {products.map(product =>(
        <Product total={total} money={money} key={product.id} basket={basket} setBasket={setBasket} product={product} />
      ))}
      </div>
      

      {total > 0 && <Basket  resetBasket={resetBasket} total={total} products={products} basket={basket}/>}
      
      
    </>
  );
}

export default App;
