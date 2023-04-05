import React from 'react';
import Lottie from 'lottie-react';
import reader from '../assets/reading-boy.json'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='grid md:grid-cols-2 md:w-[90%] mx-auto md:gap-10 mt-3 md:mt-14 items-center '>
            <div>
                <button className='px-2 text-sm font-semibold bg-yellow-500 rounded-xl text-gray-600'>ON SALE!</button>
                <h1 className='text-xl md:text-4xl font-bold my-1 md:my-3'>A reader lives a <br />
                    thousand lives <span className='text-blue-400'>before he dies</span></h1>
                <p className='text-base font-medium '>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
                <div className='flex gap-4 items-center my-1 md:my-4'>
                    <Link to="books" className='px-3 py-1 bg-blue-500 rounded text-base font-bold text-white'>Visit Store!</Link>
                    <Link>Learn More!</Link>
                </div>
            </div>
            <div>
                <div className='w-[80%] mx-auto'>
                    <Lottie animationData={reader} loop={true}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Home;