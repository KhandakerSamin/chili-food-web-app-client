import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import bannerImg from '../assets/img/italian-food-composition-with-big-space-middle.jpg';
import axios from "axios";
import swal from "sweetalert";

const CheckOut = () => {


    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    const navigate = useNavigate()

    const { user } = useContext(AuthContext)
    const userEmail = user.email
    const foodInfo = useLoaderData()
    // console.log(foodInfo);
    const { Price, Image, _id, Category, Name, Quantity, Description, MadeBy, FoodOrigin } = foodInfo;

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
            return swal("CheckOut Failed!", "You Created Ths product , you cant buy", "error");
        }
        const url = 'http://localhost:5000/carts';
        axios.post(url, order)
            .then(res => {
                console.log(res.data);
                swal("CheckOut Confirmed!", "You Purchase this Successfully!", "success");
                navigate('/allFoods')
            })
    }


    return (
        <div>
            <div className="bg-cover rounded-2xl mx-2 min-h-[350px]" style={bannerStyle}>
                <h1 className="text-white text-7xl font-bold text-center pb-4 pt-20">Check Out</h1>
                <p className="text-center font-semibold  text-white text-3xl">Your Choosen Food Item is here </p>
                <p className="text-center text-white font-semibold text-3xl">For Confirm Purchase Click the Purchase Button</p>
            </div>

            <div className="w-2/3 mx-auto p-10 bg-red-50 my-10">
                <h1 className="text-4xl font-bold text-center">{Name} </h1>
                <div className="flex justify-between items-start px-32 mt-10">
                    <div className="space-y-3">
                        <h1 className="text-2xl font-bold">Product Information : </h1>
                        <h1 className="text-xl font-bold">Price : $ {Price} </h1>
                        <h1 className="text-xl font-bold">Quantity: 01</h1>
                        <h1 className="text-xl font-bold">Category: {Category} </h1>
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-2xl font-bold">Your Information: </h1>
                        <h1 className="text-xl font-bold">UserName : {user.displayName}</h1>
                        <h1 className="text-xl font-bold">Email : {user.email}</h1>

                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Link><button onClick={handleCheckOut} className="btn btn-outline px-40 normal-case font-bold  text-2xl my-10">Purchase Now</button></Link>

                </div>
            </div>

        </div>
    );
};

export default CheckOut;