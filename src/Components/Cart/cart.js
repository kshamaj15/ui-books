import React from 'react'
import './cart.css'
const cart = props => {
    return(
        <div className="cart">
            <h7>Items in Cart: {props.items}   </h7>
        </div>
    )
}

export default cart;