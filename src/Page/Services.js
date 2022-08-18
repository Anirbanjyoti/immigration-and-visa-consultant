import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="text-4xl font bold mb-5">Immigration & Visa Services</h1>
        <p className="text-center text-2xl">
          Sponsoring and managing work visas parts now becoming results the
          experience <br />
          aute irure dolor in reprehenderit cepteur sint ocaecat cupidatate
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 p-24">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
