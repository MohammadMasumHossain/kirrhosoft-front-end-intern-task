
import { Outlet } from 'react-router';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';


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

        </div>
    );
};

export default HomeLayout;