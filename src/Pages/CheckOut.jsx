import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import bannerImg from '../assets/img/italian-food-composition-with-big-space-middle.jpg';
import axios from "axios";
import swal from "sweetalert";
import { Helmet } from 'react-helmet';
import img1 from '../assets/img/section-1.jpg'
import img2 from '../assets/img/section-2.jpg'
import img3 from '../assets/img/section.jpg'


const CheckOut = () => {


    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    const navigate = useNavigate()

    const { user } = useContext(AuthContext)
    const userEmail = user.email
    const foodInfo = useLoaderData()

    const { Price, Image, _id, Category, Name, Count, Quantity, MadeBy, FoodOrigin } = foodInfo;

    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const PurchaseTime = ` ${hours}:${minutes}:${seconds}`
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed (0-11), so we add 1 to get the real month (1-12).
    const day = currentDate.getDate();
    const PurchaseDate = ` ${year}-${month}-${day}`
    console.log(PurchaseDate);

    const handleCheckOut = () => {

        if (Quantity == 0) {
            return swal("CheckOut Failed!", "Sorry, This Product is not available at the moment", "error");
        }

        const order = {
            name: Name,
            image: Image,
            Category,
            Quantity,
            MadeBy,
            Price,
            FoodOrigin,
            userName: user.displayName,
            userEmail: user.email,
            PurchaseTime,
            PurchaseDate
        }
        console.log(order);
        if (userEmail == MadeBy) {
            return swal("CheckOut Failed!", "You Created Ths product , you can't buy", "error");
        }
        const url = 'https://chili-food-server.vercel.app/carts';
        axios.post(url, order)
            .then(res => {
                console.log(res.data);
                swal("CheckOut Confirmed!", "You Purchase this Successfully!", "success");
                navigate('/myCart')

                const updatedCount = Count + 1;
                const updatedQuantity = Quantity - 1;
                const updateUrl = `https://chili-food-server.vercel.app/allFoods/${_id}`
                axios.patch(updateUrl, { Count: updatedCount, Quantity: updatedQuantity })
                    .then(res => {
                        console.log(res.data);
                    })
            })
    }


    return (
        <div>
            <Helmet>
                <title>ChiliFood | CheckOut</title>
                <meta name="description" content="This is a description of my page." />
            </Helmet>

            <div className="bg-cover rounded-2xl mx-2 min-h-[350px]" style={bannerStyle}>
                <h1 className="text-white text-7xl font-bold text-center pb-4 pt-16">Check Out</h1>
                <p className="text-center font-semibold  text-white pb-2 text-3xl">Your Choosen Food Item is here </p>
                <p className="text-center text-white font-semibold pb-2 text-4xl">{Name}</p>
                <p className="text-center text-white font-semibold text-3xl">For Confirm Purchase Click the Purchase Button</p>
            </div>

            <div className="flex flex-row ">
                <div className="w-3/5 p-10 rounded-2xl mt-14">
                <h1 className='text-5xl text-center mt-4 mb-5  md:mt-16 font-bold '>Check Out Form</h1>
                    <p className='text-xl mb-10 text-center  font-semibold'>Review Your Information Properly </p>
                    <div className=" shadow-2xl rounded-2xl">
                        <h1 className="text-4xl pt-10 font-bold text-center">{Name} <span className="text-2xl text-yellow-500">X 1</span> </h1>
                        <div className="flex w-1/2 pl-3 ml-48 mx-auto flex-col  justify-between items-start mt-10">
                            <div className="space-y-6">
                                <h1 className="text-2xl text-center font-bold">Food Info : </h1>
                                <div className="flex justify-between items-center">
                                    <h1 className="text-2xl font-bold">Price : $ <span className="text-yellow-500">{Price}</span> </h1>
                                    <h1 className="text-xl font-bold">Remaining: {Quantity}</h1>
                                </div>
                                <h1 className="text-xl font-bold">Category: {Category} </h1>
                                <h1 className="text-xl font-semibold">Made By: {MadeBy} </h1>
                            </div>
                            <div className="space-y-6">
                                <h1 className="text-2xl text-center mt-5 font-bold">Your Info : </h1>
                                <h1 className="text-xl font-semibold">Name : {user.displayName}</h1>
                                <h1 className="text-xl font-semibold">Email : {user.email}</h1>
                                <div className="flex justify-between items-center">
                                    <h1 className="text-xl font-bold">Date : {PurchaseDate}</h1>
                                    <h1 className="text-xl font-bold">Time : {PurchaseTime}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link><button onClick={handleCheckOut} className="btn btn-outline bg-yellow-600 border-none text-white px-40 normal-case font-bold  text-2xl my-10">Confirm Purchase</button></Link>
                        </div>
                    </div>
                </div>
                <div className="2/5 p-10 mr-5 max-w-xl rounded-2xl mt-20 ">

                    <h1 className='text-5xl text-center mt-4 mb-5 md:mt-10 font-bold '>Our Populer Offers</h1>
                    <p className='text-xl text-center  font-semibold'>Those offers is for limited time and also for following some terms and condition </p>

                    <div className="flex flex-col-reverse  w-full  gap-y-10 my-16 justify-center mx-auto items-center">
                        {/* <div className='w-full '>
                            <img className='h-[580px] rounded-lg w-full' src={img1} alt="" />
                        </div> */}
                        <div className="flex w-full gap-y-10 mt-4 md:mt-0 flex-col justify-center ">

                            <img className='rounded-lg mb-4 md:mb-0' src={img2} alt="" />
                            <img className='rounded-lg mb-4 md:mb-0 ' src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;