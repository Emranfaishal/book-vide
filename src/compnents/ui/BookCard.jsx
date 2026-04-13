import React from 'react';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <Link to={`/booksDetails/${book.bookId}`}>
            <div className="card bg-base-100 w-full shadow-sm p-4">
                <div className='bg-gray-200 p-4 rounded-2xl'>
                    <figure>
                        <img
                            src={book.image}
                            alt={book.bookName} className='rounded-xl h-50 ' />
                    </figure>
                </div>

                <div className="card-body">

                    {book.tags.map((tag, ind) => (
                        <div
                            key={ind}
                            className="badge text-green-500 bg-green-100 font-bold "
                        >
                            {tag}
                        </div>
                    ))}

                    <h2 className="card-title text-2xl">
                        {book.bookName}
                    </h2>

                    <p className='font-semibold text-lg'>{book.author}</p>
                    <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
                        <div className="font-semibold">{book.category}</div>
                        <div className="flex gap-2 items-center ">
                            {book.rating}
                        </div>
                    </div>


                </div>
            </div>
        </Link>
    );
};

export default BookCard;