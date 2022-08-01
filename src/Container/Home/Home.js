import React from 'react';
import './Home.css';
import Cart from "../../Components/Cart/Cart";
import Menu from "../../Components/Menu/Menu";

const Home = () => {

    return (
        <div className="Home">
            <Menu
            />
            <Cart
            />
        </div>
    );
};

export default Home;