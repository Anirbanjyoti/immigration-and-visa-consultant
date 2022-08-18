import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { title, short, img } = service;
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="service" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{title}</h2>
        <p>{short}</p>
        <div class="card-actions">
          <Link to='/checkout' class="btn bg-secondary border-2 border-white">
            BooK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
