import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import auth from "../firebase.init";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const [services, setServices] = useState({});
  const { serviceId } = useParams();
// const [shipping] = useShippingDetails(purchaseId);

  useEffect(() => {
    const url = `http://localhost:5000/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [serviceId]);
const navigate = useNavigate();
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      Name: user.displayName,
      serviceId: serviceId,
      visa: services.title,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };

    axios.post("http://localhost:5000/candidate", order).then((res) => {
      const { data } = res;
      if (data.insertedId) {
        toast(" Your Consultation is Booked!");
      }
      e.target.reset();
    });
    navigate('/confirm')
  };

  return (
    <div className="add-consultant w-1/2 mx-auto collapse-title text-xl font-medium font-bold border border-base-300 rounded-box mt-8">
      <div className="mb-10 text-3xl uppercase">Candidate Details</div>
      <h1>Service ID: {serviceId}</h1>
      <form onSubmit={handlePlaceOrder} className="mt-2 grid">
        <input
          className="mb-2 border-2 p-2 "
          type="text"
          name="name"
          id=""
          value={user?.displayName}
          placeholder="Name"
          required
          readOnly
        />
        <input
          className="mb-2 border-2 p-2"
          type="email"
          name=""
          id=""
          value={user?.email}
          placeholder="Email"
          required
          disabled
        />
        <input
          className="mb-2 border-2 p-2"
          type="text"
          name=""
          id=""
          value={services?.title}
          placeholder="Visa Name"
          required
          readOnly
        />
        <input
          className="mb-2 border-2 p-2"
          type="text"
          name="address"
          id=""
          placeholder="Address"
          required
        />

        <input
          className="mb-2 border-2 p-2"
          type="text"
          name="phone"
          id=""
          placeholder="Phone"
          required
        />
        <input
          type="submit"
          value="Book Consultant"
          className="border-2 p-2 bg-secondary cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Checkout;
