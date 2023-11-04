import img1 from './../../assets/img/section-1.jpg'
import img2 from './../../assets/img/section-2.jpg'
import img3 from './../../assets/img/section.jpg'

const Offer = () => {
    return (
        <div className="flex w-4/5  gap-x-10 my-16 justify-center mx-auto items-center">
                <div className='w-1/2 '>
                    <img className='h-[710px] rounded-lg w-full' src={img1} alt="" />
                </div>
                <div className="flex w-1/2 gap-y-5 flex-col justify-center ">
                    <h1 className='text-5xl font-bold '>Our Populer Offers</h1>
                    <p className='text-xl font-semibold'>Those offers is for limited time and also for following some terms and condition </p>
                    <img className='rounded-lg ' src={img2} alt="" />
                    <img className='rounded-lg ' src={img3} alt="" />
                </div>
        </div>
    );
};

export default Offer;