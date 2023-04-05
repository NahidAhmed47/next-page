import React, { useState } from 'react';
import { Bars3BottomRightIcon, BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex justify-between items-center px-10 md:px-20 py-2 bg-slate-200'>
            <Link to='/' className='flex items-center'>
                <BoltIcon className="w-10 h-10 text-blue-500"></BoltIcon>
                <h1 className="ml-2 text-xl md:text-2xl font-bold font-serif tracking-wide ">nextPage</h1>
            </Link>
            <ul className='md:flex font-semibold text-base md:text-lg space-x-10 hidden'>
                <li>
                    <NavLink to='/' className={({isActive})=> isActive ? 'text-blue-500' : ''}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/books' className={({isActive})=> isActive ? 'text-blue-500' : ''}>Books</NavLink>
                </li>
                <li>
                    <NavLink to='/contract' className={({isActive})=> isActive ? 'text-blue-500' : ''}>Contract</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive})=> isActive ? 'text-blue-500' : ''}>About</NavLink>
                </li>
            </ul>
            {/* Mobile toggle menu btn section */}
            <div className='md:hidden'>
                <button aria-label='Open Menu' title='Open Menu' onClick={()=> setIsOpen(!isOpen)}>
                    <Bars3BottomRightIcon className='w-5 h-5 text-slate-700'></Bars3BottomRightIcon>
                </button>
                {
                    isOpen && (
                        <div className='absolute top-14 right-14 bg-slate-200 p-3 rounded'>
                            <ul className=''>
                               <li>
                                      <NavLink to='/' className={({isActive})=> isActive ? 'text-blue-500' : ''}>Home</NavLink>
                                </li>
                                 <li>
                                     <NavLink to='/books' className={({isActive})=> isActive ? 'text-blue-500' : ''}>Books</NavLink>
                                </li>
                                 <li>
                                      <NavLink to='/contract' className={({isActive})=> isActive ? 'text-blue-500' : ''}>Contract</NavLink>
                                </li>
                                  <li>
                                      <NavLink to='/about' className={({isActive})=> isActive ? 'text-blue-500' : ''}>About</NavLink>
                                 </li>
                             </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Header;