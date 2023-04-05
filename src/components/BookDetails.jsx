import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const bookDetails = useLoaderData();
    console.log(bookDetails );
    return (
        <div>
            <h1>detail consoled</h1>
        </div>
    );
};

export default BookDetails;