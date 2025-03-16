import React, { useContext, useEffect } from 'react';
import CountryCard from '../components/CountryCard';
import { CountryContext } from '../context/CountryContext';
import axios from 'axios';

const Home = () => {
    const { countries, setCountries } = useContext(CountryContext);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await axios.get('https://restcountries.com/v3.1/all');
                setCountries(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCountries();
    }, [setCountries]);

    return (
        <div>
            <h1 className="text-4xl text-center my-4">Welcome to WorldUniversity</h1>
            <h2 className="text-2xl text-center mb-4">Popular Countries</h2>
            <div className="flex flex-wrap justify-center">
                {countries.length > 0 ? (
                    countries.slice(0, 6).map(country => <CountryCard key={country.cca3} country={country} />)
                ) : (
                    <p>Loading countries...</p>
                )}
            </div>
        </div>
    );
};

export default Home;