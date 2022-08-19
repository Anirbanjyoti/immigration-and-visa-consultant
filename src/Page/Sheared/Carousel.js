import React from "react";
import { Link, useNavigate } from "react-router-dom";
import slide1 from "../../Assets/Images/banner-1.jpg";
import slide2 from "../../Assets/Images/banner-2.jpg";
import slide3 from "../../Assets/Images/banner-3.jpg";

const Carousel = () => {
  const navigate = useNavigate();
  const handleDiscover=e=>{
    e.preventDefault();
    navigate('/service')
  }
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide1} alt="images" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2} alt="images" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide3} alt="images" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div className="absolute p-44">
          <h1 className="text-5xl text-white font-bold">
            Modern Immigration <br /> Firm With Savings{" "}
          </h1>
          <a href={Link} onClick={handleDiscover} className="btn border-2 border-white btn-accent bg-secondary text-white mt-2">Discover Solution</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
