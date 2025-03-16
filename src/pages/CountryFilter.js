import React, { useContext, useState } from 'react';
import { CountryContext } from '../context/CountryContext';
import CountryCard from '../components/CountryCard';

const CountryFilter = () => {
    const { countries } = useContext(CountryContext);
    const [region, setRegion] = useState('');

    const filteredCountries = region ? countries.filter(country => country.region === region) : countries;

    return (
        <div>
            <h1 className="text-2xl text-center my-4">Filter Countries by Region</h1>
            <select className="border rounded p-2" onChange={(e) => setRegion(e.target.value)}>
                <option value="">All Regions</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Americas">Americas</option>
            </select>
            <div className="flex flex-wrap justify-center">
                {filteredCountries.map(country => <CountryCard key={country.cca3} country={country} />)}
            </div>
        </div>
    );
};

export default CountryFilter;