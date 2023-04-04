import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center md:px-20 py-2 bg-slate-200'>
            <Link to='/' className='flex items-center'>
                <BoltIcon className="w-10 h-10 text-blue-500"></BoltIcon>
                <h1 className="ml-2 text-xl md:text-2xl font-bold font-serif tracking-wide ">nextPage</h1>
            </Link>
            <ul className='md:flex font-semibold text-base md:text-lg space-x-10 hidden'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/books'>Books</NavLink>
                </li>
                <li>
                    <NavLink to='/contract'>Contract</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;