import React from 'react';
import { moneyFormat } from '../helpers';
import '../App.css'


function Header({ money, total }) {


  return (
    <div className='header' style={{
      background: 'linear-gradient(90deg, rgba(0,163,255,1) 0%, rgba(149,149,187,1) 50%)',
      display: 'flex',
      padding: '20px',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '30px',
      fontWeight: 'normal',
      color: 'white',
      position:'sticky',
      width:'100%',
      top:'0',
      zIndex:"2"

    }}>

      {total > 0 && money - total !== 0 && (
        <> Harcamak için <span className='moneyStyle'> {moneyFormat(money - total)} $ </span> paranız kaldı</>
      )}
      {total === 0 && (
        <> Harcamak için <span className='moneyStyle'> {moneyFormat(money)} $ </span> paranız var!</>
      )}
      {money - total === 0 && (
        <> Paran bitti!</>
      )}
      <style >{
        `
        .moneyStyle{
          background-color: rgba(0, 00, 02, 0.6);
          margin: 0px 10px;
          padding:0px 5px;
          border-radius:15px;
        }

        `
      }</style>


    </div>

  )
}

export default Header;