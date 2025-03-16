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
        {/* <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" component={CountrySearch} />
                <Route path="/filter" component={CountryFilter} />
                <Route path="/about" component={About} />
                <Route path="/country/:countryName" component={CountryDetail} />
            </Switch>
            <Footer />
        </Router> */}
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<CountrySearch />} />
                <Route path="/filter" element={<CountryFilter />} />
                <Route path="/about" element={<About />} />
                <Route path="/country/:countryName" element={<CountryDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </CountryProvider>
);

export default App;