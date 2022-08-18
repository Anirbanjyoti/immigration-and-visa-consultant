import React from "react";
import {Link } from "react-router-dom";

const Country = ({ country }) => {
  return (
    <div>
      <div className="m-5">
        <img src={country.img} alt="country" className="w-full" />
      </div>
      <div class="flex justify-center">
        <div class="mt-[-60px]">
          <a href={Link} class="text-2xl text-white">
            {country.CountryName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Country;
