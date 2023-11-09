import { Link, useLoaderData } from "react-router-dom";
import bannerImg from '../assets/img/FoodDetailBanner.jpg'
import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";
import TopFoodCard from "../Components/TopFoodCard";
import loadingImg from '../assets/img/c4cb9abc7c69713e7e816e6a624ce7f8 - Copy.gif'



const FoodDetails = () => {
    const foodInfo = useLoaderData()
    console.log(foodInfo);
    const { Price, Image, _id, Category, Name, Quantity, Description, MadeBy, FoodOrigin } = foodInfo;


    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };


    const [data, setData] = useState(null);

    useEffect(() => {
        const url = "https://chili-food-server.vercel.app/allFoods?sortField=Price&sortOrder=asc";
        fetch(url)
            .then((res) => res.json())
            .then((responseData) => {
                const slicedData = responseData.slice(0, 3);
                setData(slicedData);
            });
    }, []);

    console.log(data);



    return (
        <div >

            <Helmet>
                <title>ChiliFood | Details</title>
                <meta name="description" content="This is a description of my page." />
            </Helmet>

            <div className="bg-cover rounded-2xl mx-2 min-h-[350px]" style={bannerStyle}>
                <h1 className="text-white text-3xl font-bold text-center pb-4 pt-20">Details Of </h1>
                <h1 className="text-white text-7xl font-bold text-center pb-4 pt-5">{Name}</h1>
                <h1 className="text-white text-3xl font-bold text-center pb-4 pt-5">{Category}</h1>
                
            </div>
            <div className="flex justify-center gap-x-8 mx-16 mt-20 items-start">
                <div className="w-2/3">
                    <img className="w-full rounded-2xl h-[500px]" src={Image} alt="" />

                </div>
                <div className="w-1/3 my-5 space-y-4">
                    <h1 className="text-4xl  font-bold">{Name} </h1>
                    <h1 className="text-3xl font-bold">Price: $ <span className="text-yellow-400">{Price}</span> </h1>
                    <h1 className="text-2xl font-semibold">Category: {Category} </h1>
                    <h1 className="text-2xl font-semibold">Quantity Remaining: {Quantity} </h1>
                    <h1 className="text-2xl font-semibold">Food Origin: {FoodOrigin} </h1>
                    <h1 className="text-2xl font-semibold">Made By: {MadeBy} </h1>
                    <h1 className="text-xl font-semibold">Description: {Description} </h1>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Link to={`/checkOut/${_id}`}> <button className="btn btn-outline px-40 normal-case font-bold bg-yellow-600 border-none text-2xl text-white my-10">Order Now...</button></Link>
            </div>

            <div>
            <h1 className='text-5xl text-center mb-3 mt-8 md:mt-8 font-bold '>Our Populer Foods</h1>
            <p className='text-xl text-center  font-semibold'>Here some suggested food for you  </p>
            </div>

            {data ? (
                <div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 md:mx-24 gap-7 mt-8 md:mt-20 mb-10">
                        {
                            data.map(
                                singleData => <TopFoodCard key={singleData._id} singleData={singleData}></TopFoodCard>
                            )
                        }
                    </div>
                    <button className="btn border-none btn-outline bg-yellow-600 text-white normal-case mx-auto mb-20 flex justify-center">
                        <Link to='/allFoods'>
                            <div className='flex items-center justify-between'>
                                See More...
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default FoodDetails;