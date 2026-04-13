import React, { use } from 'react';
import BookCard from '../ui/BookCard';
const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooksPage = () => {
    const books = use(booksPromise);
    return (
        <div className='mt-12 container mx-auto space-y-3'>
            <h2 className='font-bold text-3xl text-center'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15'>
                {
                    books.map((book, ind) => {
                        return <BookCard key={ind} book={book}></BookCard>
                    })
                }
            </div>
        </div>
    );
};

export default AllBooksPage;