
import Offer from "./Offer";
import Navbar from "../shared/Navbar";
import { useLoaderData } from "react-router-dom";
import Service from "./service";
import Slider from "./Slider";
import Reviews from "./Reviews";
import Footer from "./Footer";


const Home = () => {
    const allData = useLoaderData();
    const services = allData.categories;
    return (
        <div>
            <Offer></Offer>
            <Navbar></Navbar>
            <Slider></Slider>
            <h2 className="text-7xl text-blue-500 font-black text-center my-8">Our services</h2>
            <div className="grid lg:grid-cols-2 gap-5">
            {
                services.map(service => <Service service={service} key={service.id}></Service> )
            }
            </div>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;