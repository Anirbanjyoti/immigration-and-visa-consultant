import React from "react";
import {Link, useNavigate } from "react-router-dom";

const Country = ({ country }) => {
  const navigate = useNavigate();
  const handleQuickVisa=e=>{
    e.preventDefault();
    navigate('/service')
  }
  return (
    <div>
      <div className="m-5">
        <img src={country.img} alt="country" className="w-full" />
      </div>
      <div className="flex justify-center">
        <div className="mt-[-60px]">
          <a href={Link} onClick={handleQuickVisa} className="text-2xl text-white">
            {country.CountryName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Country;
