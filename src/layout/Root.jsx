import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";



const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;