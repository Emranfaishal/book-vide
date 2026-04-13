import React, { useContext, useState } from 'react';
import { BookContexts } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedWishBooks = ({ sortingType }) => {
    const { wishList } = useContext(BookContexts);
    // console.log(storedBooks, wishList, 'bookcontes');
    const [sortedList, setSortedList] = useState([]);
    console.log(sortedList, setSortedList);


    // const [filteredWishList, setFilteredWishList] = useState(wishList);

    // useEffect(() => {
    //     if (sortingType) {
    //         if (sortingType === "totalPages") {
    //             const sortedData = [...wishList].sort(
    //                 (a, b) => a.totalPages - b.totalPages,
    //             );
    //             console.log(sortedData);
    //             setFilteredWishList(sortedData);
    //         } else if (sortingType === "rating") {
    //             const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
    //             console.log(sortedData);
    //             setFilteredWishList(sortedData);
    //         }
    //     }
    // }, [sortingType, wishList]);
    let filteredDatas = [...wishList];

    if (sortingType === "totalPages") {
        filteredDatas.sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === "rating") {
        filteredDatas.sort((a, b) => b.rating - a.rating);
    }

    // useEffect(() => {
    //     let sortedData = wishList;
    //     if (sortedData === 'totalPages') {
    //         sortedData = [...wishList].sort((a, b) => a.totalPages - b.totalPages);

    //     } else if (sortedData === 'rating') {
    //         sortedData = [...wishList].sort((a, b) => b.rating - b.rating);
    //     }
    //     setSortedList(sortedData);
    // }, [sortingType, wishList]);

    if (wishList.length === 0) {
        return <div className='h-[50vh] bg-gray-200 flex items-center justify-center'>
            <h2 className='font-bold text-4xl'>NO wish list data found</h2>
        </div>
    }
    return (
        <div>
            <div className='gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    wishList.map((book, ind) => (
                        <div className='p-5'>
                            <BookCard key={ind} book={book}></BookCard>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ListedWishBooks;