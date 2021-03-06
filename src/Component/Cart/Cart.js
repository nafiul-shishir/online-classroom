import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const coursePrice = cart[i];
        total = total +  +coursePrice.price;
    }

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number (precision);
    }

   
    return (
        <div>
            
            <h3> <FontAwesomeIcon icon={faMoneyBill} /> <span id="cart-colour">Total: ${formatNumber(total)} </span></h3>
            
        </div>
    );
};

export default Cart;