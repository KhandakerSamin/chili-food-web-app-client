import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../assets/img/3834.jpg';
import FoodCard from '../Components/FoodCard';

const AllFood = () => {
    const allFoods = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFoods = allFoods.filter(food =>
        food.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/*  all food banner  */}

            <div className='flex mx-auto justify-between px-36 items-center h-[450px]'>
                <div>
                    <h1 className='text-5xl font-semibold text-left '><span className='font-bold text-7xl'>Food</span> you love , <br /> delivered <span className='font-bold text-7xl'>to you </span></h1>
                    <h1></h1>
                    <button className="btn btn-outline my-10">Learn More...</button>
                </div>
                <div>
                    <img className='h-[400px]' src={img} alt="" />
                </div>
            </div>

            <div className="form-control relative">

                <div className="flex justify-center gap-10 items-center">
                <div>
                        <h1 className='text-xl text-center font-bold'>Chili Food</h1>
                        <h1 className='text-4xl text-center mb-6 font-bold'>Our All Food Items</h1>
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
