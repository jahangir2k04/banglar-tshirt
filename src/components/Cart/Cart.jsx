import React from 'react';
import './Cart.css';

const Cart = ({cart, removeFromCart}) => {
    console.log(cart);


    return (
        <div>
            <h3>Order Summary : {cart.length}</h3>
            {
                cart.map(tshirt => 
                <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => removeFromCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;