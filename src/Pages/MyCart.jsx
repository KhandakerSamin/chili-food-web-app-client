import { useContext, useEffect, useState } from 'react';
import bannerImg from '../assets/img/MyChartBnner.jpg'
import { AuthContext } from '../Providers/AuthProviders';
import axios from 'axios';
import CartCard from '../Components/CartCard';
import Swal from 'sweetalert2';

const MyCart = () => {

    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    const {user} = useContext(AuthContext);

    const [myCart, setMyCarts] = useState([]);

    const url = `https://chili-food-server.vercel.app/carts?email=${user?.email}`;

    useEffect(() => {
        axios.get( url ,{withCredentials:true})
        .then(res => {
            setMyCarts(res.data)
        })
    },[url])
    
    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "This Food will romove from the cart!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://chili-food-server.vercel.app/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Removed from Cart!',
                                'Your Food has been Removed.',
                                'success'
                            )
                            const remaining = myCart.filter(item => item._id != _id);
                            setMyCarts(remaining);
                        }
                    })
            }
        })
    }


    console.log(myCart);

    return (
        <div>
            <div className="bg-cover rounded-2xl mx-2 min-h-[350px]" style={bannerStyle}>
                <h1 className="text-white text-7xl font-bold text-left ml-16 pb-4 pt-20">Your Cart</h1>
                <p className="ml-16 font-semibold text-left  text-white text-3xl">Your Orderd Food Item is here </p>
                <h1 className='text-4xl text-white ml-16 my-8 font-bold rounded-2xl m-5 pb-4 '>Total Ordered Foods :  {myCart.length} </h1> 
            </div>


            <div className='grid grid-cols-1 mt-10 lg:grid-cols-2 mx-12 gap-10'>
                {
                    myCart.map( cart => <CartCard key={cart._id} handleDelete={handleDelete} cart={cart}></CartCard> )
                }
            </div>

        </div>
    );
};

export default MyCart;