import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
const Product = (props) => {
    // console.log(props.product);
    const { name, img, seller, price, stock, star } = props.product;
    const shopIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="name">Name : {name}</h3>
                <h5> By {seller}</h5>
                <p>Price : {price}</p>
                <p><small>Only {stock} in stock. Order fast.</small></p>
                <Rating readonly
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color">
                </Rating>
                <br />
                <button onClick={() => props.handleAddTocart(props.product)} className="button-regular">{shopIcon} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;