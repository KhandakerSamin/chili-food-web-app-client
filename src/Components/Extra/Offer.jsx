import img1 from './../../assets/img/section-1.jpg'
import img2 from './../../assets/img/section-2.jpg'
import img3 from './../../assets/img/section.jpg'

const Offer = () => {
    return (
        <div>
            <h1 className='text-5xl text-center mt-4 mb-5 md:mt-10 font-bold '>Our Populer Offers</h1>
            <p className='text-xl text-center  font-semibold'>Those offers is for limited time and also for following some terms and condition </p>
            <div className="flex flex-col md:flex-row-reverse w-4/5  gap-x-10 my-16 justify-center mx-auto items-center">
                <div className='w-full md:w-1/2 '>
                    <img className='h-[580px] rounded-lg w-full' src={img1} alt="" />
                </div>
                <div className="flex w-full md:w-1/2 mt-4 md:mt-0 md:gap-y-12 flex-col justify-center ">

                    <img className='rounded-lg mb-4 md:mb-0' src={img2} alt="" />
                    <img className='rounded-lg mb-4 md:mb-0 ' src={img3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Offer;