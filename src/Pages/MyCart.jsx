import bannerImg from '../assets/img/MyChartBnner.jpg'

const MyCart = () => {

    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    return (
        <div>
            <div className="bg-cover rounded-2xl mx-2 min-h-[350px]" style={bannerStyle}>
                <h1 className="text-white text-7xl font-bold text-left ml-16 pb-4 pt-20">Your Ordered Foods</h1>
                {/* <p className="text-center font-semibold  text-white text-3xl">Your Choosen Food Item is here </p>
                <p className="text-center text-white font-semibold text-3xl">For Confirm Purchase Click the Purchase Button</p> */}
            </div>
        </div>
    );
};

export default MyCart;