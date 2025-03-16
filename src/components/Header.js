import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-blue-600 text-white p-4">
        <nav>
            <Link className="px-4" to="/">Home</Link>
            <Link className="px-4" to="/search">Country Search</Link>
            <Link className="px-4" to="/filter">Country Filter</Link>
            <Link className="px-4" to="/about">About</Link>
        </nav>
    </header>
);

export default Header;