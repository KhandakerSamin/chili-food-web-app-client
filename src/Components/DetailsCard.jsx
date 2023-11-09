/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DetailsCard = ({singleData}) => {
    const { Price, Image, _id, Category, Name, Quantity, FoodOrigin } = singleData;

    return (
        <div className=" border shadow-md border-black  max-w-[350px] max-h-[500px] rounded-3xl">
            <div className="">
                <img className="w-[350px] rounded-t-2xl h-[250px]" src={Image} alt="" />
            </div>
            <div className="mx-10 gap-x-10">
                <h1 className="text-left font-bold text-xl mt-5 mb-2">{Name}</h1>
                
                    <h1 className="text-md text-left font-bold">Price: $ <span className="text-xl text-yellow-400">{Price}</span></h1>
                    <h1 className="text-md text-left font-semibold">Category: {Category}</h1>
                    <h1 className="text-md text-left font-semibold ">Quantity:{Quantity}</h1>
                    <h1 className="text-md text-left font-semibold ">Origin: {FoodOrigin}</h1>
                <div className="mb-5 mt-2">
                    <Link to={`/foodDetails/${_id}`}>
                        <button className="normal-case border-none bg-yellow-600 text-white btn btn-outline w-full text-lg ">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default DetailsCard;

/* eslint-disable react/prop-types */

