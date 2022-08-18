import React from "react";
import {Link } from "react-router-dom";

const Country = ({ country }) => {
  return (
    <div>
      <div className="m-5">
        <img src={country.img} alt="country" className="w-full" />
      </div>
      <div className="flex justify-center">
        <div className="mt-[-60px]">
          <a href={Link} className="text-2xl text-white">
            {country.CountryName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Country;
