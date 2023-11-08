import Banner from "../Components/Banner";
import Offer from "../Components/Extra/Offer";
import Reserve from "../Components/Extra/Reserve";
import TopFood from "../Components/TopFood";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopFood></TopFood>
            <Offer></Offer>
            <Reserve></Reserve>
        </div>
    );
};

export default Home;