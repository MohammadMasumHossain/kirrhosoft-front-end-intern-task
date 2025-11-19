
import { Outlet } from 'react-router';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Plan from '../components/Plan';
import SocialProof from '../components/SocialProof';


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
            
            <Plan></Plan>
            <SocialProof></SocialProof>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default HomeLayout;