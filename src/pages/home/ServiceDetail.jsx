import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";


const ServiceDetail = () => {
    const {id} = useParams();
    const allData = useLoaderData();
    const services = allData.categories;
    const expectedService = services.find(service => service.id == id);
    console.log(expectedService);
    const {image,name, price, details, short_description} = expectedService;
    return (
        <div className="lg:max-w-6xl md:max-w-xl max-w-sm">
            <Navbar></Navbar>
           <p className="text-center text-5xl mt-10 mb-4 text-green-500 font-bold">{name}</p>
           <p className="text-center  text-xl mb-8 text-yellow-800">{short_description}</p>
           <img src={image} alt="" />
           <p className="mt-6 text-lg">{details}</p>
           <button className="btn btn-primary  w-3/4 lg:ml-40 mb-10">Booking at {price}</button>
        </div>
    );
};

export default ServiceDetail;