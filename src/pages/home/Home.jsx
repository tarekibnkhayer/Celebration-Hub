
import Offer from "./Offer";
import Navbar from "../shared/Navbar";
import { useLoaderData } from "react-router-dom";
import Service from "./service";


const Home = () => {
    const allData = useLoaderData();
    const services = allData.categories;
    return (
        <div>
            <Offer></Offer>
            <Navbar></Navbar>
            <h2 className="text-4xl text-blue-500 font-black text-center my-4">Our services</h2>
            <div className="grid lg:grid-cols-2 gap-5">
            {
                services.map(service => <Service service={service} key={service.id}></Service> )
            }
            </div>
        </div>
    );
};

export default Home;