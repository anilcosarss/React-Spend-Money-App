import React from 'react';
import BasketItem from './BasketItem';
import { moneyFormat } from '../helpers';
import 'bootstrap/dist/css/bootstrap.min.css';

function Basket({basket,products,total,resetBasket}) {
  return ( 
    <div className='basket bg-dark'>
         {basket.map(item =>(
            <BasketItem key={item.id} item={item} product={products.find(p => p.id ===item.id)} />
        ))}

        
        <div className='d-flex justify-content-center align-items-center flex-column pb-5'>
        <div className='text-white mb-3 fs-3'>Toplam : <span className='text-success'>${moneyFormat(total)}</span> </div>
        <button className='btn btn-primary w-25 ' onClick={resetBasket}>Sepeti Sıfırla</button>

        </div>
    </div>
   
  )
}

export default Basket;