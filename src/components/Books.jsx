import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './book';

const Books = () => {
    const {books} = useLoaderData();
    return (
        <div>
            {
                books.map(book => <Book key={book.isbn13} book={book}></Book>)
            }
        </div>
    );
};

export default Books;