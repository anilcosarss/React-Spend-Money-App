import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { moneyFormat } from '../helpers';

function BasketItem({ item, product }) {
  return (
    <div className='basket d-flex justify-content-center ' >

      {product.title &&
        <div className='basket-items w-50  text-white  px-4 py-2' >

        <span className='fs-4 me-3'>{product.title}</span>  <span>x</span>
        <span className='ms-1 fs-5'>{item.amount}</span>
        <span className='ms-5 '>${moneyFormat(Math.round(product.price * item.amount))}</span>
          <hr />

     </div> }
    

    </div>
  )
}

export default BasketItem;