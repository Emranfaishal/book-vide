import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContexts } from '../../context/BookContext';

const BookDetails = () => {
    const { bookId: bookParamsId } = useParams();
    // console.log('id', bookParamsId);
    const books = useLoaderData();
    // console.log(books);
    const expectedBook = books.find((book) => book.bookId === Number(bookParamsId));
    // console.log(expectedBook);
    const { bookName, author, image, review, totalPages, category, tags, publisher, yearOfPublishing } = expectedBook;

    const { handleMarkAsRead, handleWishList } = useContext(BookContexts);
    // console.log(handleMarkAsRead, 'bookcontestf')


    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
            <figure className="w-full flex items-center justify-center bg-gray-100 rounded-xl">
                <img src={image} alt="Album" className="h-100" />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title">By: {author}</h2>
                <p className="py-2 border-y">{category}</p>
                <p>Review: {review}</p>
                <div className="flex items-center gap-2 ">
                    {tags.map((tag, ind) => (
                        <div
                            key={ind}
                            className="badge text-green-500 bg-green-100 font-bold "
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="border-t space-y-3">
                    <div className="flex justify-between items-center gap-2">
                        <span>Number of pages: </span> <span>{totalPages}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <span>publisher: </span> <span>{publisher}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <span>Publish time: </span> <span>{yearOfPublishing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            className="btn"
                            onClick={() => handleMarkAsRead(expectedBook)}

                        >
                            Mark as Read
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => handleWishList(expectedBook)}
                        >
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;