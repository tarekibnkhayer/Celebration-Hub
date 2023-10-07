import Marquee from "react-fast-marquee";

const Offer = () => {
    return (
        <div className="flex mt-7">
            <button className="bg-green-600 rounded-2xl p-3 w-44  text-white">OFFER:</button>
            <Marquee pauseOnHover className="text-2xl font-semibold text-blue-600" speed={180} >
                Sparkle and Save: Exclusive Offers for Your Special Day!
            
                
            </Marquee>
        </div>
    );
};

export default Offer;