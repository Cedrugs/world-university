import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-blue-600 text-white shadow-md">
        <nav className="container mx-auto flex justify-between p-4">
            <h1 className="text-lg font-bold">WorldUniversity</h1>
            <div>
                <Link className="px-4 hover:text-blue-300" to="/">Home</Link>
                <Link className="px-4 hover:text-blue-300" to="/search">Country Search</Link>
                <Link className="px-4 hover:text-blue-300" to="/filter">Country Filter</Link>
                <Link className="px-4 hover:text-blue-300" to="/about">About</Link>
            </div>
        </nav>
    </header>
);

export default Header;