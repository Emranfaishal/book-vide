import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookContext, { BookContexts } from '../../context/BookContext';
import ListedReadBooks from '../../compnents/listedBooks/ListedReadBooks';
import ListedWishBooks from '../../compnents/listedBooks/ListedWishBooks';

const Books = () => {
    const { storedBooks, wishList } = useContext(BookContexts);
    // console.log(storedBooks, wishList, 'bookcontes');
    const [sortingType, setSortingType] = useState('');

    return (
        <div className='mt-8 container mx-auto'>
            <div className='flex justify-center   '>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">sort by ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType('totalPages')}><a>pages</a></li>
                        <li onClick={() => setSortingType('rating')}><a>rating</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Read list :{storedBooks.length}</h2>
                    <ListedReadBooks sortingType={sortingType}></ListedReadBooks>
                </TabPanel>
                <TabPanel>
                    <h2>Wish list :{wishList.length}</h2>
                    <ListedWishBooks sortingType={sortingType}></ListedWishBooks>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;