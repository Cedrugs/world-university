import React, { useState, useContext } from 'react';
import { CountryContext } from '../context/CountryContext';
import CountryCard from '../components/CountryCard';

const CountrySearch = () => {
    const { countries } = useContext(CountryContext);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className="text-2xl text-center my-4">Search for a Country</h1>
            <input
                type="text"
                className="border rounded p-2"
                placeholder="Enter country name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-wrap justify-center">
                {filteredCountries.map(country => <CountryCard key={country.cca3} country={country} />)}
            </div>
        </div>
    );
};

export default CountrySearch;