import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router-dom";
import loadingImg from '../assets/img/c4cb9abc7c69713e7e816e6a624ce7f8 - Copy.gif'


const TopFood = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = "http://localhost:5000/allFoods?sortField=Count&sortOrder=desc";
        fetch(url)
            .then((res) => res.json())
            .then((responseData) => {
                // Slice the first 6 items from the data
                const slicedData = responseData.slice(0, 6);
                setData(slicedData);
            });
    }, []);

    return (
        <div>
            <h1 className='text-5xl text-center mt-8 md:mt-20 font-bold '>Our Top Selling Foods</h1>
            <p className='text-xl text-center  font-semibold'> This Prouducts are sorted here by Purchased Count by Customer </p>
            {data ? (
                <div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 md:mx-36 gap-7 mt-8 md:mt-20 mb-10">
                        {
                            data.map(
                                singleData => <TopFoodCard key={singleData._id} singleData={singleData}></TopFoodCard>
                            )
                        }
                    </div>
                    <button className="btn btn-outline normal-case mx-auto mb-20 flex justify-center">
                        <Link to='/allFoods'>
                            <div className='flex items-center justify-between'>
                                See All Foods
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                        </Link>
                    </button>

                </div>
            ) : (
                <img className="w-2/5 mt-5 mx-auto" src={loadingImg} alt="" />
            )}

        </div>
    );
};

export default TopFood;
