import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RemoveCountry } from '../../redux/actions/country';
import { AppState } from '../../types';
import Flag from '../Flag/Flag';

export default function Cart() {
    const dispatch = useDispatch()
    const {addedCountries} = useSelector((state: AppState) => state.country)
    const counter = addedCountries.length;
    
    return (
        <>
            {addedCountries.length === 0 ? (
                <p>The cart is empty.</p>
            ) : (
                <p> In Cart: {counter}</p>
            )}
            
            <ul>
                {addedCountries.map((added) => 
                    <li key="added.name">
                        <Flag flagUrl={added.flag} />
                        {added.name}
                        <button 
                        onClick={() => dispatch(RemoveCountry(added))}>
                            Remove
                        </button>
                    </li>
                )}
            </ul>
        </>
    )
}