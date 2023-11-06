import { Link, useLoaderData } from "react-router-dom";
import bannerImg from '../assets/img/FoodDetailBanner.jpg'


const FoodDetails = () => {
    const foodInfo = useLoaderData()
    console.log(foodInfo);
    const { Price, Image, _id, Category, Name, Quantity, Description, MadeBy, FoodOrigin } = foodInfo;

    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    return (
        <div >
            <div className="bg-cover rounded-2xl mx-2 min-h-[350px]" style={bannerStyle}>
                <h1 className="text-white text-3xl font-bold text-center pb-4 pt-20">Details Of </h1>
                <h1 className="text-white text-7xl font-bold text-center pb-4 pt-5">{Name}</h1>
                {/* <p className="text-center font-semibold  text-white text-3xl">Your Choosen Food Item is here </p>
                <p className="text-center text-white font-semibold text-3xl">For Confirm Purchase Click the Purchase Button</p> */}
            </div>
            <div className="flex justify-center gap-x-8 mx-16 mt-20 items-start">
                <div className="w-2/3">
                    <img className="w-full rounded-2xl h-[500px]" src={Image} alt="" />

                </div>
                <div className="w-1/3 space-y-6">
                    <h1 className="text-4xl  font-bold">{Name} </h1>
                    <h1 className="text-3xl font-bold">Price: $ {Price} </h1>
                    <h1 className="text-2xl font-semibold">Category: {Category} </h1>
                    <h1 className="text-2xl font-semibold">Category: {Quantity} </h1>
                    <h1 className="text-2xl font-semibold">Made By: {MadeBy} </h1>
                    <h1 className="text-2xl font-semibold">Food Origin: {FoodOrigin} </h1>
                    <h1 className="text-2xl font-semibold">Description: {Description} </h1>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Link to={`/checkOut/${_id}`}> <button className="btn btn-outline px-40 normal-case font-bold text-2xl my-10">Order Now...</button></Link>
            </div>
        </div>
    );
};

export default FoodDetails;