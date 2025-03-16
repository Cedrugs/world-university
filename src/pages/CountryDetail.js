import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CountryContext } from '../context/CountryContext';
import axios from 'axios';

const CountryDetail = () => {
    const { countryName } = useParams();
    const { setCountries } = useContext(CountryContext);
    const [country, setCountry] = React.useState(null);

    useEffect(() => {
        const fetchCountryDetail = async () => {
            try {
                const res = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
                setCountry(res.data[0]);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCountryDetail();
    }, [countryName]);

    if (!country) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1 className="text-2xl">{country.name.common}</h1>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            <p><strong>Capital:</strong> {country.capital[0]}</p>
            <p><strong>Population:</strong> {country.population}</p>
            <p><strong>Area:</strong> {country.area} km²</p>
            <p><strong>Currencies:</strong> {Object.values(country.currencies).map(cur => cur.name).join(', ')}</p>
            <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
            <p><strong>Map:</strong> <a href={country.maps.googleMaps} target="_blank" rel="noreferrer">View on Google Maps</a></p>
        </div>
    );
};

export default CountryDetail;