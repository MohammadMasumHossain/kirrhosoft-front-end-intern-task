
import { Outlet } from 'react-router';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const HomeLayout = () => {
    return (
        <div>
            <header> 
                <Navbar></Navbar>
                <Hero></Hero>
                </header>
            <main>
               <Outlet></Outlet> 
            </main>
            <Footer></Footer>

        </div>
    );
};

export default HomeLayout;