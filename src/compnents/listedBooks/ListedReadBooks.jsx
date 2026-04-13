import React, { useContext } from 'react';
import { BookContexts } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedReadBooks = ({ sortingType }) => {
    // console.log(sortingType);
    const { storedBooks } = useContext(BookContexts);
    // const [filteredReadList, setFilteredReadList] = useState([]);
    // console.log(filteredReadList, setFilteredReadList);

    let filteredData = [...storedBooks];
    console.log(filteredData);

    if (sortingType === "totalPages") {
        filteredData.sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === "rating") {
        filteredData.sort((a, b) => b.rating - a.rating);
    }

    // const [filteredReadList, setFilteredReadList] = useState(storedBooks);

    // console.log(filteredReadList, "filteredReadList");

    // useEffect(() => {
    //     if (sortingType) {
    //         if (sortingType === "totalPages") {
    //             const sortedData = [...storedBooks].sort(
    //                 (a, b) => a.totalPages - b.totalPages,
    //             );
    //             console.log(sortedData);
    //             setFilteredReadList(sortedData);
    //         } else if (sortingType === "rating") {
    //             const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
    //             console.log(sortedData);
    //             setFilteredReadList(sortedData);
    //         }
    //     }
    // }, [sortingType, storedBooks]);


    if (storedBooks.length === 0) {
        return <div className='h-[50vh] bg-gray-200 flex items-center justify-center'>
            <h2 className='font-bold text-4xl'>NO read list data found</h2>
        </div>
    }
    console.log(storedBooks);
    return (
        <div className='gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {
                storedBooks.map((book, ind) => (
                    <div key={book.bookId} className='p-5'>
                        <BookCard key={ind} book={book}></BookCard>
                    </div>
                ))
            }
        </div>
    );
};

export default ListedReadBooks;