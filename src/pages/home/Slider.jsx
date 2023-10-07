

const Slider = () => {
    return (
        <div className="carousel w-full lg:h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/FK01Q6y/pexels-skg-photography-6685151.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full lg:h-[500px]">
          <img src="https://i.ibb.co/WPX2jvY/start-blowing-first-make-wish.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full lg:h-[500px]">
          <img src="https://i.ibb.co/QcMg4JX/jason-goodman-Nd-Z08c-zu0c-unsplash.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full lg:h-[500px]">
          <img src="https://i.ibb.co/2YFcFSc/daniel-gutko-k-V8c-1-Yv-Tzs-unsplash.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Slider;