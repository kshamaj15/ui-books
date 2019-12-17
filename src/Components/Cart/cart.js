import React from 'react'
import './cart.css'
const cart = props => {
    return(
        <div className="cart">
        <h7>Items in Cart: {props.items}   </h7>
        {/* <h7>Total Price: {props.price}</h7> */}
        {/* <button onClick ={props.cart}> See the cart</button> */}
        </div>
    )
}

export default cart;