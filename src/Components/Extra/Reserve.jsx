import { useContext } from 'react';
import img from '../../assets/img/reserve.jpg';
import { AuthContext } from '../../Providers/AuthProviders';
import axios from 'axios';
import swal from 'sweetalert';
const Reserve = () => {

    const bannerStyle = {
        backgroundImage: `url(${img})`,
    };

    const {user} = useContext(AuthContext)

    const handleBookTable = ( e ) => {
        e.preventDefault()
        const userName = user?.displayName ;
        const userEmail = user?.email ;
        const bookingDate = e.target.date.value ;
        const address = e.target.address.value;
        const newTable = {
            userName, userEmail, bookingDate, address 
        }
        console.log(newTable);
        axios.post('http://localhost:5000/tableBookings', newTable)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId) {
                swal("Good job!", "You Booked a table!", "success");
            }
        } )
    }

    return (
        <div>
            <h1 className='text-3xl mx-8 md:text-5xl text-center mb-5 mt-20 font-bold '>Advance Table Booking</h1>
            <p className='text-md md:text-xl mx-10 text-center  font-semibold'> You can book your table and time as like your occation </p>
            <div className='bg-cover my-1 h-[460px] rounded-2xl mt-20 w-4/5 mx-auto' style={bannerStyle}>
                <form onSubmit={handleBookTable}>
                    <div>
                        <h1 className='text-white text-center font-bold pt-12 mb-5 text-2xl'>Reservation</h1>
                        <h1 className='text-white text-center font-bold  text-3xl md:text-5xl'>BOOK YOUR TABLE</h1>
                        <h1 className='text-white font-semibold text-xl mb-10 mt-2 text-center'>Give the date which you want to book table</h1>
                        <div className='flex justify-center items-center gap-x-7 mx-10 mb-4'>
                            <input type="text" name='name' placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" />
                            <input type="email" name='email' placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className='flex justify-center items-center gap-x-7 mx-10 mb-4'>
                            <input type="date" name='date' placeholder="Booking Date" className="input input-bordered w-full max-w-xs" />
                            <input type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-xs" />                        </div>
                        <div className='flex justify-center items-center gap-x-7 mx-10 mb-4'>
                            
                            <button type='submit' className="btn border-none hidden md:block btn-outline text-base md:text-xl font-bold bg-yellow-600 text-white border border-black normal-case w-full md:w-[320px]">Find your table</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reserve;