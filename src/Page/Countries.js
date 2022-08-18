import React, { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('CoutriesImage.json')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    }, [])
  return (
    <div className="">
      <div className="text-center bg-accent text-white pt-40 pb-60">
        <h3>COUNTRIES WE OFFER SUPPORT</h3>
        <h1 className="text-5xl font-bold pb-10">Apply For Quick Visa</h1>
        <div class="divider bg-secondary divide-dashed w-60 h-px mx-auto"></div> 
      </div>
        <div className="md:flex justify-evenly  md:mx-40 mt-[-200px]">
            {
                countries.map(country=><Country key={country.id} country={country}></Country>)
            }
        </div>
      
    </div>
  );
};

export default Countries;
