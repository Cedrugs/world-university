import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CountrySearch from './pages/CountrySearch';
import CountryDetail from './pages/CountryDetail';
import CountryFilter from './pages/CountryFilter';
import About from './pages/About';

const App = () => (
    <CountryProvider>
        <BrowserRouter>
            <div className='flex flex-col min-h-screen'>
              <Header />
              <div className='flex flex-grow justify-center items-center'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<CountrySearch />} />
                    <Route path="/filter" element={<CountryFilter />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/country/:countryName" element={<CountryDetail />} />
                </Routes>
              </div>
              <Footer />
            </div>
        </BrowserRouter>
    </CountryProvider>
);

export default App;