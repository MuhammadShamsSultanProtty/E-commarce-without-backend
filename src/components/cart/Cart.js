import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // let total = 0;
    // for (const product of cart) {
    //     total = total + product.price;
    // }
    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items ordered : {props.cart.length}</h5>
            <h5>Price : {total.toFixed(2)}</h5>
            <h5>Shipping : {shipping}</h5>
            <h5>Tax : {tax.toFixed(2)}</h5>
            <h5>Grand Total : {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;