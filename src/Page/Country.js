import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <div className="m-5">
        <img src={country.img} alt="country" className="w-full" />
      </div>
      <div class="flex justify-center">
        <div class="mt-[-100px]">
          <button class="btn btn-outline bg-secondary  text-white">
            {country.CountryName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;
