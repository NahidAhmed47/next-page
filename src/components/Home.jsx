import React from 'react';
import Lottie from 'lottie-react';
import reader from '../assets/reading-boy.json'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='grid md:grid-cols-2 md:w-[90%] mx-auto md:gap-10 mt-3 md:mt-14 items-center '>
            <div className='px-2 text-center md:px-0 md:text-left'>
                <button className='px-3 text-[12px] font-bold bg-yellow-400 rounded-xl text-gray-600'>ON SALE!</button>
                <h1 className='text-xl md:text-4xl font-bold my-1 md:my-3'>A reader lives a <br />
                    thousand lives <span className='text-blue-400'>before he dies</span></h1>
                <p className='text-base font-medium text-gray-500 md:my-4'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
                <div className='flex gap-4 items-center my-1 md:my-4 w-full justify-center md:justify-start'>
                    <Link to="books" className='px-4 py-1 bg-blue-500 rounded text-base font-bold text-white duration-200 hover:bg-blue-400 hover:scale-[1.1]'>Visit Store!</Link>
                    <Link className='text-base font-bold hover:text-blue-500 duration-100 px-4 py-1 hover:bg-gray-100 rounded'>Learn More!</Link>
                </div>
            </div>
            <div>
                <div className='w-[85%] mx-auto'>
                    <Lottie animationData={reader} loop={true}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Home;