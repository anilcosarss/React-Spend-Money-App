import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Product({ product, basket, setBasket, money, total }) {

    const basketItem = basket.find(item => item.id === product.id)


    const addBasket = () => {

        const checkBasket = basket.find(item => item.id === product.id)

        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])

        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWitoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        console.log(product.title)

        if (currentBasket.amount === 0) {
            setBasket([basketWitoutCurrent])
        } else {
            setBasket([...basketWitoutCurrent, currentBasket])
        }

    }


    return (



        <div className='col-xl-3 col-md-6 col-lg-4 p-3 bg-dark' style={{
            
            background: "#fff",
            marginBottom: "20px",
        }}>
            <div className='product d-flex gap-2 flex-column align-items-center justify-content-center bg-white p-3'>
                <img alt="A red apple with water droplets" style={{
                    maxWidth:"270px",
                    width:"100%",
                    height:"270px"
                }} src={product.image} />
                <h6 className='fs-3 fw-bold'>{product.title}</h6>

                <h3>${product.price}</h3>
                <div className='d-flex align-items-center justify-content-center w-75'>
                    <button className='btn btn-danger' disabled={!basketItem} onClick={removeBasket}>Sat</button><div className='fs-4 mx-2'>{basketItem ? basketItem.amount : 0}</div><button className='btn btn-success' disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
                </div>
            </div>
        </div>



    )
}

export default Product;