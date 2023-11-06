import { useContext } from 'react';
import bannerImg from '../assets/img/addProductbg.jpg'
import { AuthContext } from '../Providers/AuthProviders';
import axios from 'axios';
import swal from 'sweetalert';
const AddFood = () => {

    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    const { user } = useContext(AuthContext)

    const userEmail = user.email

    const handleAddFood = event => {
        event.preventDefault()

        const form = event.target

        const Name = form.name.value;
        const Category = form.category.value;
        const Quantity = form.quantity.value;
        const MadeBy = userEmail;
        const Price = form.price.value;
        const FoodOrigin = form.price2.value;
        const Description = form.description.value;
        const Image = form.image.value
        const Count = 0;
        const foodItem = { Name, Category, Quantity, Price, FoodOrigin, MadeBy, Description, Image, Count }
        console.log(foodItem);
        const url = 'http://localhost:5000/allFoods';
        axios.post(url, foodItem)
        .then(res => {
            console.log(res.data);
            swal("Food Added ", "You Added a New Food Successfully!", "success");

        })
        
    }

    return (
        <div>

            <div className="bg-cover rounded-2xl mx-2 min-h-[350px]" style={bannerStyle}>
                <h1 className="text-white text-7xl font-bold text-center pb-4 pt-20">Add A New Food</h1>
                {/* <p className="text-center font-semibold  text-white text-3xl">Your Choosen Food Item is here </p>
                <p className="text-center text-white font-semibold text-3xl">For Confirm Purchase Click the Purchase Button</p> */}
            </div>

            <div className="relative mb-16">
                <div className="mb-12 ml-4 mt-6">

                </div>
                <div className="bg-cover  flex justify-center items-center  h-full" >

                    <div className='w-2/3 h-5/6 rounded-md bg-[#F4F3F0]'>
                        <h1 className='text-4xl mt-12 mb-5 font-bold text-[#374151] text-center '>Add New Food Item</h1>

                        <div className='mx-14'>
                            <div className=''>
                                <form onSubmit={handleAddFood} className='my-8'>
                                    <h1 className='text-center font-bold py-5 text-3xl'>Food Information</h1>

                                    <div className='flex gap-x-10'>
                                        <div className='w-1/2'>
                                            <label className="label">
                                                <span className="label-text">Food Name</span>
                                            </label>
                                            <input type="text" placeholder="Food name here" name='name' className="input  w-full" required />

                                            <label className="label">
                                                <span className="label-text">Food Image Url</span>
                                            </label>
                                            <input type="text" placeholder="Give the photo URL" name='image' className="input  w-full" required />

                                            <label className="label">
                                                <span className="label-text">Food Category</span>
                                            </label>
                                            <input type="text" placeholder="Food category here" name='category' className="input  w-full" required />


                                        </div>
                                        <div className='w-1/2'>
                                            <label className="label">
                                                <span className="label-text">Food Quantity</span>
                                            </label>
                                            <input type="text" placeholder="Food quantity here" name='quantity' className="input  w-full" required />

                                            <label className="label">
                                                <span className="label-text">Food Price ($) </span>
                                            </label>
                                            <input type="text" placeholder="Give price here" name='price' className="input  w-full" required />
                                            <label className="label">
                                                <span className="label-text">Food Origin </span>
                                            </label>
                                            <input type="text" placeholder="Food Origin" name='price2' className="input  w-full" required />
                                            {/* <label className="label">
                                                <span className="label-text">Food Origin</span>
                                            </label>
                                            <input type="text" placeholder="Food Origin here" name='origin' className="input  w-full" required /> */}

                                        </div>
                                    </div>
                                    <label className="label">

                                        <span className="label-text">Sort Description</span>
                                    </label>
                                    <input type="text" placeholder="Sort description" name='description' className="input   w-full" required />


                                    <h1 className='text-center font-bold pb-3 pt-6 text-3xl'>Your Information</h1>

                                    <div className='flex gap-x-10'>
                                        <div className='w-1/2'>
                                            <label className="label">
                                                <span className="label-text">Added By (Name)</span>
                                            </label>
                                            <input type="text" placeholder="" value={user.displayName} name='origin' className="input  w-full" required />
                                        </div>
                                        <div className='w-1/2'>
                                            <label className="label">

                                                <span className="label-text">Added By (Email)</span>
                                            </label>
                                            <input type="text" placeholder="" value={user.email} name='userName' className="input  w-full" required />
                                        </div>
                                    </div>

                                    <div className='mb-10 mt-8'>
                                        <button type='submit' className='btn normal-case text-xl font-bold btn-outline text-[#331A15]  w-full  '>Add Food </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AddFood;