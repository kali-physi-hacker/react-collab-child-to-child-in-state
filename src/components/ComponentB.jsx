import React, { useState } from 'react';


const ComponentB = props => {

    // props.value === undefined
    const addToCart = (e) => {
        props.setCart(props.cart + 1)
    }

    const removeFromCart = (e) => {
        if (props.cart.length >= 0) {
            props.setCart(props.cart - 1);
        }
    }

    return (
        <div>
            <h1>Some State in ComponentB</h1>
            <h3>Cart: {props.cart}</h3>

            <button onClick={addToCart}>Add to cart</button><br/><br />
            <button onClick={removeFromCart}>Remove From Cart</button>
        </div>
    )
}


export default ComponentB;