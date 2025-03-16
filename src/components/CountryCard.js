import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
    console.log(country);

    return (
        <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden m-2 max-w-xs">
            <Link to={`/country/${country.name.common}`}>
                <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="w-full h-32 object-cover" />
                <div className="p-4">
                    <h2 className="text-xl font-semibold">{country.name.common}</h2>
                </div>
            </Link>
    </div>
    )
};

export default CountryCard;