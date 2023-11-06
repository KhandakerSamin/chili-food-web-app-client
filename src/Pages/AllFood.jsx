import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../assets/img/3834.jpg';
import FoodCard from '../Components/FoodCard';
import bannerImg from '../assets/img/allFoodBanner.jpg'


const AllFood = () => {
    const allFoods = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFoods = allFoods.filter(food =>
        food.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    return (
        <div>

            <div className="bg-cover rounded-2xl  mb-16 mx-2 h-[480px]" style={bannerStyle}>
                        <h1 className='text-5xl py-[245px] text-white font-semibold text-center '><span className='font-bold text-7xl'>Food</span> you love , <br /> delivered <span className='font-bold text-7xl'>to you </span>
                        </h1>
            </div>

            <div className="form-control relative">

                <div className="flex bg-red-200 px-20 py-4 justify-between gap-10 rounded-2xl items-center">
                    <div>
                        <h1 className='text-4xl text-center  font-bold'>Our All Food Items</h1>
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
                {filteredFoods.map(food => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default AllFood;
