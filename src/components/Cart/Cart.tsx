import React from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../../types';

export default function Cart() {
    const {addedCountries} = useSelector((state: AppState) => state.country)
    console.log(addedCountries, 'from cart');
    const counter = addedCountries.length;
    return (
        <div>
            <p> In Cart: {counter}</p>
            {addedCountries.map((added) => 
                <p>{added.name}</p>
            )}
        </div>
    )
}