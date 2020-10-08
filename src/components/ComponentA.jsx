import React from 'react';


const ComponentA = props => {
    return (
        <div style={{marginTop: 120, backgroundColor: "#343276", width: "100%", height: 200, color: "white", padding: 80}}>
            <h1>State from Component B</h1>
            <h3>Cart: {props.cart}</h3>
        </div>
    )
}


export default ComponentA;