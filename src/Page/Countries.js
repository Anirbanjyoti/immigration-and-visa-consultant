import React, { useEffect, useState } from "react";
import Country from "./Country";
import bg from "../Assets/Images/pattern.png";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="relative">
      <div className="py-24">
        <img src={bg} alt="background" className="bg-contain"></img>
      </div>
      <div className="absolute top-0">
        <div className="text-center text-white pt-40 pb-60 bg-auto bg-no-repeat bg-center">
          <h3>COUNTRIES WE OFFER SUPPORT</h3>
          <h1 className="text-5xl font-bold pb-10">Apply For Quick Visa</h1>
          <div class="divider bg-secondary divide-dashed w-60 h-px mx-auto"></div>
        </div>

        <div className="md:flex justify-evenly  md:mx-60 mt-[-200px]">
          {countries.map((country) => (
            <Country key={country.id} country={country}></Country>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
