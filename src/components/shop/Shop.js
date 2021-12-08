import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './shop.css';



const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayproducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        console.log('Product api called');
        fetch('./products.json')
            .then(response => response.json())
            .then(json => {
                setProducts(json);
                setDisplayProducts(json);
            });
        console.log('Product api received');
    }, []);



    useEffect(() => {
        console.log('local storage called');
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    console.log(addedProduct);
                    storedCart.push(addedProduct);
                }

            }
            setCart(storedCart);
        }
    }, [products])
    const handleAddTocart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);
    }
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Your Product" />
            </div>

            <div className="shop_container">
                <div className="product_container">
                    {/* <h1>Product :{products.length}</h1> */}
                    {
                        displayproducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddTocart={handleAddTocart}
                        >
                        </Product>)
                    }
                </div>
                <div className="cart_container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;