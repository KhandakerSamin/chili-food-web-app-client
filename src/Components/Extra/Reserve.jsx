import img from '../../assets/img/reserve.jpg';
const Reserve = () => {

    const bannerStyle = {
        backgroundImage: `url(${img})`,
    };

    return (
        <div className='bg-cover h-[460px] w-4/5 mx-auto' style={bannerStyle}>
            <div>
                <h1 className='text-white text-center font-bold pt-12 mb-5 text-2xl'>Reservation</h1>
                <h1 className='text-white text-center font-bold mb-10 text-5xl'>BOOK YOUR TABLE</h1>
                <div className='flex justify-center items-center gap-x-7 mx-10 mb-4'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex justify-center items-center gap-x-7 mx-10 mb-4'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex justify-center items-center gap-x-7 mx-10 mb-4'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <button className="btn bg-red-100  w-[320px]">FIND A TABLE</button>
                </div>
            </div>
        </div>
    );
};

export default Reserve;