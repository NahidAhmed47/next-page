import React from 'react';

const SingleBook = ({book}) => {
    const {isbn13, price, image, subtitle, title} = book;
    return (
        <div className='border relative overflow-hidden duration-200 hover:-translate-y-2 rounded'>
            <img className='object-cover w-full ' src={image} alt="" />
            <div className='bg-black text-white p-2 md:p-4 opacity-0 hover:opacity-75 absolute inset-0 duration-200 flex flex-col '>
                <h1>{title}</h1>
                <p className='mt-10'>{subtitle.substring(0, 60)}...read more</p>
                <p className='mt-auto'>{price}</p>
            </div>
        </div>
    );
};

export default SingleBook;