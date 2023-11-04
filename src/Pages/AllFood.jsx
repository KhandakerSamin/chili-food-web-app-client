import img from '../assets/img/3834.jpg'
import { MdSearch } from "react-icons/md";
const AllFood = () => {
    return (
        <div>
            {/* this is all food banner  */}
            <div className='flex mx-auto justify-between px-36 items-center h-[450px]'>
                <div>
                    <h1 className='text-5xl font-semibold text-left '><span className='font-bold text-7xl'>Food</span> you love , <br /> delivered <span className='font-bold text-7xl'>to you </span></h1>
                    <h1></h1>
                    <button className="btn btn-outline my-10">Learn More...</button>
                </div>
                <div>
                    <img className='h-[400px]' src={img} alt="" />
                </div>
            </div>

            {/* now this is all food navber  */}

            <div className='flex justify-between px-36 items-center '>
                <div>
                    <h1 className='text-4xl font-bold '>Our All Items</h1>
                </div>
                <div>

                    <div className="form-control relative">
                        <div className=' flex justify-center items-center'>
                        <input type="text" placeholder="Search by name" className="input  w-24 rounded-2xl input-bordered md:w-72" />
                        <button className='text-4xl absolute right-1 rounded-r-2xl p-[7px] font-bold'><MdSearch></MdSearch></button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AllFood;