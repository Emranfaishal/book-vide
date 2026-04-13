import React from 'react';
import img from '../../assets/pngwing 1.png'

const BannerPage = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                    <img
                        src={img}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='space-y-6'>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>

                        <button className="btn bg-green-500">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerPage;