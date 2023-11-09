import { useEffect, useState } from 'react';
import FoodCard from '../Components/FoodCard';
import bannerImg from '../assets/img/allFoodBanner.jpg';
import loadingImg from '../assets/img/c4cb9abc7c69713e7e816e6a624ce7f8 - Copy.gif'



const ITEMS_PER_PAGE = 9; // Number of items per page

const AllFood = () => {


    const [data, setData] = useState(null);

    useEffect(() => {
        const url = "https://chili-food-server.vercel.app/allFoods?sortField=Price&sortOrder=asc";
        fetch(url)
            .then((res) => res.json())
            .then((responseData) => {
                const slicedData = responseData.slice();
                setData(slicedData);
            });
    }, []);

    console.log(data);


    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredFoods = data?.filter(food =>
        food.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalItems = filteredFoods?.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const displayFoods = filteredFoods?.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <div>

            <div className="bg-cover rounded-2xl mb-16 mx-2 h-[480px]" style={bannerStyle}>
                <div>
                    <h1 className='text-5xl py-[245px] text-yellow-500 font-semibold text-center '>
                        <span className='font-bold text-6xl  text-white'>Food</span> you love , delivered <span className='font-bold  text-white text-6xl'>to you </span>
                        <h1 className='mt-5'><input
                            type="text"
                            placeholder="Search by name"
                            className="input w-24 rounded-2xl bg-white text-white border-none border-white boder-2 md:w-72 dark:bg-black"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />

                        /></h1>
                    </h1>

                </div>
            </div>

            <div>
                <h1 className='text-5xl text-center mb-5 mt-8 md:mt-20 font-bold '>Our All Foods Items here</h1>
                <p className='text-xl text-center  font-semibold'> Choose your food and for details click the details button </p>
            </div>

            {displayFoods ? (
                <div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-36 gap-7 my-20">
                        {displayFoods.map(food => (
                            <FoodCard key={food._id} food={food} />
                        ))}
                    </div>

                </div>
            ) : (
                <img className="w-2/5 mx-auto" src={loadingImg} alt="" />
            )}


            <div className="flex justify-center my-4">
                <div className="space-x-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`btn ${index + 1 === currentPage ? ' px-[18px] bg-slate-900 btn hover:bg-slate-900  text-white rounded-full' : 'btn btn-outline rounded-xl bg-yellow-600 border-none text-white'
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
