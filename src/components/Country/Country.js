import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, population, region, area, flags } = props.country;
    return (
        <div className='country-container fw-bold'>
            <h3>Name: {name.common}</h3>
            <img className='mt-2 mb-3' src={flags.png} alt="" />
            <h5>Population:{population}</h5>
            <p>Area: {area}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;