import { Link } from 'react-router-dom';
import gif from './../assets/img/HTML-404-Crying-Baby-Page.gif'

const ErrorPage = () => {
    const bannerStyle = {
        backgroundImage: `url(${gif})`,
    };
    return (
        <div className='bg-cover' style={bannerStyle}>
           <div className='h-screen text-center  pt-20 text-3xl font-bold'>
           <Link className='p-5 border-spacing-2 text-black' to='/'>Go to home</Link>
           </div>
        </div>
    );
};

export default ErrorPage;