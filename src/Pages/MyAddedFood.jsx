import { useContext, useEffect, useState } from 'react';
import bannerImg from '../assets/img/myAddedBnner.jpg'
import axios from 'axios';
import { AuthContext } from '../Providers/AuthProviders';
import MyFoodCard from '../Components/MyFoodCard';
const MyAddedFood = () => {

    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    const {user} = useContext(AuthContext);

    const [myFoods, setMyFoods] = useState([]);

    const url = `http://localhost:5000/allFoodsbyEmail?email=${user?.email}`;

    useEffect(() => {

        axios.get( url ,{withCredentials:true})
        .then(res => {
            setMyFoods(res.data)
        })

    },[url])

    console.log(myFoods);

    return (
        <div>
            <div className="bg-cover rounded-2xl mx-2 min-h-[350px]" style={bannerStyle}>
            <h1 className="text-white text-7xl font-bold text-left ml-16 pb-4 pt-20">Foods Added By You</h1>
                {/* <p className="text-center font-semibold  text-white text-3xl">Your Choosen Food Item is here </p>
                <p className="text-center text-white font-semibold text-3xl">For Confirm Purchase Click the Purchase Button</p> */}
            </div>

            <div>
                <h1 className='text-5xl font-bold bg-red-100 rounded-2xl m-5 my-14 py-4 text-center'>Your Added Foods Count : {myFoods.length} </h1>
            </div>


           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-10 gap-y-5 gap-x-5  mx-8 mt-10'> 
           {
                myFoods.map( food => <MyFoodCard key={food._id} food={food}></MyFoodCard>)
            }
           </div>



        </div>
    );
};

export default MyAddedFood;