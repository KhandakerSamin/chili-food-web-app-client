import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Helmet } from 'react-helmet';

const Root = () => {
    const location = useLocation();

    // Define a function to generate the page title based on the current route
    const getPageTitle = () => {
        switch (location.pathname) {
            case "/page-one":
                return "Page One Title";
            case "/page-two":
                return "Page Two Title";
            // Add more cases for other routes
            default:
                return "Chili Food";
        }
    };

    return (
        <div className='max-w-[1440px] mx-auto'>
            <Helmet>
                <title>{getPageTitle()}</title>
                {/* Add default meta tags here */}
            </Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
