
import { Link } from 'react-router-dom';
import bannerImg from './../assets/img/kitchen-table-with-ingredients-cooking-top-view-still-life-rustic-style-ai-generated.jpg';
// import bannerImg from './../assets/img/italian-food-composition-with-big-space-middle.jpg';

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    return (
        <div className="h-[550px] bg-cover rounded-2xl" style={bannerStyle}>
            <div className='pt-24 pl-36 space-y-7'>
                <h1 className='text-6xl text-white font-bold text-left mb-4 '>Spice Up Your Palate <br /> with Chili Food's <br /> Culinary Delights!</h1>
                <p className='font-semibold text-lg text-white '>Chili Food: A culinary voyage awaits. Savor fiery flavors  and diverse <br /> cuisines at Chili Food. From mild to hot,  we'll tantalize your taste buds <br /> with an unforgettable dining experience</p>
                <Link to='/allFoods'>

                </Link>
                <button className="btn normal-case">
                    <Link to='/allFoods'>
                        <div className='flex items-center justify-between'>
                        See Our Items
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </div>
                    </Link>
                </button>
            </div>

        </div>
    );
};

export default Banner;
