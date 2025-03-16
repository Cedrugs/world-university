import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CountryDetail = () => {
    const { countryName } = useParams();
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
        return <div className="text-center">Loading...</div>;
    }

    const {
        name,
        flags,
        capital,
        population,
        area,
        currencies,
        languages,
        region,
        subregion,
        demonyms,
        timezones,
        maps,
    } = country;

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center mb-6 gap-10">
                <img src={flags.png} alt={`Flag of ${name.common}`} className="w-48 h-auto border-2 border-gray-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500"  />
                <h1 className="text-4xl font-bold">{name.common}</h1>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="font-semibold">Capital:</p>
                        <p>{capital[0]}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Population:</p>
                        <p>{population.toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Area:</p>
                        <p>{area.toLocaleString()} km²</p>
                    </div>
                    <div>
                        <p className="font-semibold">Region:</p>
                        <p>{region}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Subregion:</p>
                        <p>{subregion || 'N/A'}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Timezones:</p>
                        <p>{timezones.join(', ')}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Demonym:</p>
                        <p>{demonyms.eng.m}</p>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Languages</h3>
                    <ul className="list-disc pl-5">
                        {Object.values(languages).map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Currencies</h3>
                    <ul className="list-disc pl-5">
                        {Object.values(currencies).map((currency, index) => (
                            <li key={index}>
                                {currency.name} ({currency.symbol})
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Map</h3>
                    <a href={maps.googleMaps} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        View on Google Maps
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;