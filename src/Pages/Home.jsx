import Banner from "../Components/Banner";
import Offer from "../Components/Extra/Offer";
import Reserve from "../Components/Extra/Reserve";
import { Helmet } from 'react-helmet';
import TopFood from "../Components/TopFood";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ChiliFood-Home</title>
                <meta name="description" content="This is a description of my page." />
            </Helmet>
            <Banner></Banner>
            <TopFood></TopFood>
            <Offer></Offer>
            <Reserve></Reserve>
        </div>
    );
};

export default Home;