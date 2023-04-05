import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {
    const booksData = useLoaderData();
    console.log(booksData);
    return (
        <div>
            <h1>Books</h1>
        </div>
    );
};

export default Books;