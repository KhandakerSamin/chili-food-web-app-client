/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const TopFoodCard = ({singleData}) => {
    const { Price, Image, _id, Category, Name, Quantity, FoodOrigin } = singleData;
    // console.log(food);
    return (
        <div className="shadow-xl max-w-[350px] h-[480px] rounded-xl">
            <div className="">
                <img className="w-[350px] rounded-t-2xl h-[250px]" src={Image} alt="" />
            </div>
            <div className="mx-10 gap-x-10">
                <h1 className="text-center font-bold text-2xl my-5">{Name}</h1>
                <div className="flex w-full items-center">
                    <h1 className="text-xl w-1/2 text-left font-bold">$ {Price}</h1>
                    <h1 className="text-xl w-1/2 text-left font-semibold">{Category}</h1>
                </div>
                <div className="flex  items-center mb-5">
                    <h1 className="text-xl text-left font-semibold w-1/2">Quantity:{Quantity}</h1>
                    <h1 className="text-xl text-left font-semibold w-1/2">Origin: {FoodOrigin}</h1>

                </div>
                <div className="mb-5">
                    <Link to={`/foodDetails/${_id}`}>
                        <button className="normal-case btn btn-outline w-full  ">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopFoodCard;