import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBook from './SingleBook';

const Books = () => {
    const {books} = useLoaderData();
    return (
        <div className='max-w-[90%] mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6'>
            {
                books.map(book => <SingleBook key={book.isbn13} book={book}></SingleBook>)
            }
        </div>
    );
};

export default Books;