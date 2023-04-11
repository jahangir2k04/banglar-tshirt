import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Home.css';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    // console.log(tshirts);
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            toast.success('Already added this t-shirt')
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }
    const removeFromCart = id => {
        const remaining = cart.filter( ts => ts._id !== id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => 
                    <TShirt 
                        key={tshirt._id} 
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart} removeFromCart={removeFromCart}/>
            </div>
        </div>
    );
};

export default Home;