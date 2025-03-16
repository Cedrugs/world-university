import React from 'react';

const CountryCard = ({ country }) => (
    <div className="border border-gray-300 rounded-lg p-4 m-2">
        <h2 className="text-xl">{country.name.common}</h2>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="w-16 h-10" />
    </div>
);

export default CountryCard;