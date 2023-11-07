import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../assets/img/3834.jpg';
import FoodCard from '../Components/FoodCard';
import bannerImg from '../assets/img/allFoodBanner.jpg';
import { Helmet } from 'react-helmet';


const ITEMS_PER_PAGE = 6; // Number of items per page

const AllFood = () => {
    const allFoods = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredFoods = allFoods.filter(food =>
        food.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalItems = filteredFoods.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const displayFoods = filteredFoods.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <div>

            <Helmet>
                <title>All Food</title>
                <meta name="description" content="This is a description of my page." />
            </Helmet>

            <div className="bg-cover rounded-2xl mb-16 mx-2 h-[480px]" style={bannerStyle}>
                <h1 className='text-5xl py-[245px] text-white font-semibold text-center '>
                    <span className='font-bold text-7xl'>Food</span> you love , <br /> delivered <span className='font-bold text-7xl'>to you </span>
                </h1>
            </div>

            <div className="form-control relative">
                <div className="flex bg-red-200 px-20 py-4 justify-between gap-10 rounded-2xl items-center">
                    <div>
                        <h1 className='text-4xl text-center font-bold'>Our All Food Items</h1>
                    </div>
                    <input
                        type="text"
                        placeholder="Search by name"
                        className="input  w-24 rounded-2xl input-bordered md:w-72"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-36 gap-7 my-20">
                {displayFoods.map(food => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>

            <div className="flex justify-center my-4">
                <div className="space-x-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`btn ${index + 1 === currentPage ? 'btn bg-red-300' : 'btn-outline'
                                }`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllFood;
