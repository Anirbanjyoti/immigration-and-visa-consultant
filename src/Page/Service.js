import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, short, img } = service;

  const navigate= useNavigate();
  const handleCheckout=id=>{
    navigate(`/checkout/${_id}`)
  }
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="service" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{short}</p>
        <div className="card-actions">
          <a onClick={()=>handleCheckout(_id)}  className="btn bg-secondary border-2 border-white">
            BooK Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
