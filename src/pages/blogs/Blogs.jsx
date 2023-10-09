import Navbar from "../shared/Navbar";


const Blogs = () => {
    return (
        <div>
        <Navbar></Navbar>
        <h1 className="text-center text-6xl text-blue-600">Blogs:</h1>
        <hr  className="my-4"/>
        <div className="border mt-4 p-4">
        <h1 className="text-center text-4xl text-amber-500">Trendsetting Themes for 2023 Weddings</h1>
            <p className="mt-4 text-2xl font-caveat">Explore the latest wedding themes that are capturing hearts this year. From bohemian elegance to modern minimalism, discover the trends that will make your wedding unforgettable.</p>
            <button className="btn btn-primary text-white ">Read More..</button>
        </div>
        <div className="border mt-4 p-4">
        <h1 className="text-center text-4xl text-amber-500">Behind the Scenes: Creating Magical Moments</h1>
            <p className="mt-4 text-2xl  font-caveat">Step into the world behind the curtain as we share insights into the meticulous planning and coordination that go into creating a flawless event. Peek into the magic of event management!</p>
            <button className="btn btn-primary text-white">Read More..</button>
        </div>
        <div className="border mt-4 p-4">
        <h1 className="text-center text-4xl text-amber-500">The Art of Selecting the Perfect Venue</h1>
            <p className="mt-4 text-2xl font-caveat">Choosing the right venue sets the tone for your event. Dive into the considerations, from ambiance to capacity, that will help you find the perfect setting for your celebration.</p>
            <button className="btn btn-primary text-white">Read More..</button>
        </div>
        <div className="border mt-4 p-4">
        <h1 className="text-center text-4xl text-amber-500">Signature Cocktails for Every Occasion</h1>
            <p className="mt-4 text-2xl font-caveat">Elevate your event with signature cocktails that reflect the theme and spirit of the celebration. Explore unique recipes and presentation ideas to impress your guests.</p>
            <button className="btn btn-primary text-white">Read More..</button>
        </div>
    </div>
    );
};

export default Blogs;