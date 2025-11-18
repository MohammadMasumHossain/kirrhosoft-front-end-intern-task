
import { Outlet } from 'react-router';
import Hero from '../components/Hero';


const HomeLayout = () => {
    return (
        <div>
            <header> <Hero></Hero></header>
            <main>
               <Outlet></Outlet> 
            </main>

        </div>
    );
};

export default HomeLayout;