

const Reviews = () => {
    return (
       <div className="mt-16">
        <h2 className="text-center text-3xl mb-2">Customer Reviews</h2>
        <hr />
         <div className="grid lg:grid-cols-3 gap-4 mt-10">
            {/* review 1 */}
            <div className="border p-4"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <p className="text-xl">Effortless event planning. Our anniversary celebration was a joy, thanks to your teams expertise.</p>
                <div className="flex justify-center items-center gap-4">
                    <img src="https://i.ibb.co/CPJrdP8/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg" alt=""  className="rounded-full w-16 h-16 mt-3"/>
                    <p>Ned Stark</p>
                </div>
            </div>
            {/* review 2 */}
            <div className="border p-4">
                <p className="text-xl">Perfect decoration and Perfect buffet for my little brother birthday party!</p>
                <div className="flex justify-center items-center gap-4">
                    <img src="https://i.ibb.co/k5nqNNq/edward-cisneros-H6wpor9mjs-unsplash.jpg" alt=""  className="rounded-full w-16 h-16 mt-3"/>
                    <p>Emilia Clarke</p>
                </div>
            </div>
            {/* review 3 */}
            <div className="border p-4" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <p className="text-xl">Wedding magic! The team orchestrated a day of love and elegance beyond our imagination.</p>
                <div className="flex justify-center items-center gap-4">
                    <img src="https://i.ibb.co/fXpFBpT/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg" alt=""  className="rounded-full w-16 h-16 mt-3"/>
                    <p>Sophie Turner</p>
                </div>
            </div>
           
        </div>
       </div>
    );
};

export default Reviews;