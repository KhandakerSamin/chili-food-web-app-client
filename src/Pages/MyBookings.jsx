/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from 'react';
import bannerImg from '../assets/img/MyChartBnner.jpg'
import { AuthContext } from '../Providers/AuthProviders';
import axios from 'axios';

const MyBookings = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    const { user } = useContext(AuthContext);

    const [myBooking, setMyBooking] = useState([]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://chili-food-server.vercel.app/tableBookings/${user?.email}`);
                setMyBooking(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [user?.email]);

    console.log(myBooking);

    const TableInfo = ({ table }) => {
        return (
            <div className='p-10 rounded-2xl border-2 border-black text-xl font-semibold'>
                <h1>Your Name:  {table.userName}</h1>
                <h1>Your Email:  {table.userEmail}</h1>
                <h1>Your Adress: {table.address}</h1>
                <h1>Your Booking Date: {table.bookingDate}</h1>
            </div>
        )
    }

    return (
        <div>
            <div className="bg-cover rounded-2xl mx-2 min-h-[350px]" style={bannerStyle}>
                <h1 className="text-white text-7xl font-bold text-left ml-16 pb-4 pt-20">Your Booked Table </h1>
                <p className="ml-16 font-semibold text-left  text-white text-3xl">Your Booked Table is here with information </p>
                <h1 className='text-4xl text-white ml-16 my-8 font-bold rounded-2xl m-5 pb-4 '>Total Ordered Foods :  {myBooking.length} </h1>
            </div>

            <div className='grid grid-cols-1 mt-10 lg:grid-cols-2 mx-12 gap-10'>
                {myBooking.map((table) => (
                    <TableInfo key={table._id} table={table} />
                ))}
            </div>
        </div>
    );
};

export default MyBookings;
