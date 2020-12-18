import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios';
export default function Order(props) {
    const { values } = props;
    const [order, setOrder] = useState({
        "name": values.name,
        "size": values.size,
        "toppings": values.toppings,
        "specialInstructions": values.specialInstructions,
        'pepperoni': values.pepperoni,
        'sausage': values.sausage,
        'canadianBacon': values.canadianBacon,
        'spicyItalianSausage': values.spicyItalianSausage,
        'grilledChicken': values.grilledChicken,
        'onions': values.onions,
        'greenPepper': values.greenPepper,
        'dicedTomatos': values.dicedTomatos,
        'blackOlives': values.blackOlives,
        'roastedGarlic': values.roastedGarlic,
        'artichokeHearts': values.artichokeHearts,
        'threeCheese': values.threeCheese,
        'pineapple': values.pineapple,
        'extraCheese': values.extraCheese,
        'substitute': values.substitute,
    });

    // axios
    //     .post("https://reqres.in/api/users", order)
    //     .then(res => {
    //         console.log(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    useEffect(() => {
        axios
            .post("https://reqres.in/api/users", order)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        setOrder();
    }, [order])

    return (
        <div>
            <h1>Order Submitted! It's on the way!</h1>
            <Link to="/">
                <button>Back to Home</button>
            </Link>
        </div>
    )
}