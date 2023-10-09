import Navbar from "../shared/Navbar";


const Features = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-6xl text-green-500">Our Features:</h1>
            <hr  className="my-4"/>
            <div className="border mt-4 p-4">
            <h1 className="text-center text-4xl text-red-400">Customized Themes:</h1>
                <p className="mt-4 text-2xl font-dancing">Transform your event with a range of customizable themes tailored to suit your style, whether it is a romantic wedding, vibrant birthday party, or a sophisticated anniversary celebration.</p>
            </div>
            <div className="border mt-4 p-4">
            <h1 className="text-center text-4xl text-red-400">Expert Coordination:</h1>
                <p className="mt-4 text-2xl font-dancing">Our seasoned event coordinators ensure seamless execution, from planning to the final toast. Relax and enjoy your event while we take care of every detail.</p>
            </div>
            <div className="border mt-4 p-4">
            <h1 className="text-center text-4xl text-red-400">Innovative Decor:</h1>
                <p className="mt-4 text-2xl font-dancing">Elevate your celebration with innovative and breathtaking decor options. We bring creativity and elegance to every corner, ensuring a visually stunning experience.</p>
            </div>
            <div className="border mt-4 p-4">
            <h1 className="text-center text-4xl text-red-400">Professional Photography:</h1>
                <p className="mt-4 text-2xl font-dancing">Capture the magic with our professional photographers. Every smile, every moment of joy, and every detail will be beautifully documented to create lasting memories.</p>
            </div>
        </div>
    );
};

export default Features;