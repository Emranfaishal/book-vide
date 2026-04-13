import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { createContext } from "react";
export const BookContexts = createContext();


const BookContext = ({ children }) => {

    const [storedBooks, setStoreBook] = useState([]);
    const handleMarkAsRead = (currentBook) => {
        // console.log(currentBook);
        const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error('the book is already exist');
        }
        else {
            setStoreBook([...storedBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to list`)
        }

    };

    const [wishList, setWishList] = useState([]);
    const handleWishList = (currentBook) => {

        const isExistInReadList = storedBooks.find(book => book.bookId === currentBook.bookId);
        if (isExistInReadList) {
            toast.error('the books is already read list');
            return;
        }
        const isWishBook = wishList.find(book => book.bookId === currentBook.bookId);
        if (isWishBook) {
            toast.error('the book is already exist');
        } else {
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} is added to list`)
        }
    }



    const data = {
        storedBooks,
        setStoreBook,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList

    }
    return <BookContexts.Provider value={data}>{children}</BookContexts.Provider>
};

export default BookContext;