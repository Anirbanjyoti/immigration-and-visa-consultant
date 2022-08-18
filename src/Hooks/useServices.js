import { useEffect, useState } from "react";

const useServices = (serviceId) => {
    const [service, setService]= useState({});
    useEffect(()=>{
        const url =`http://localhost:3000/checkout/${serviceId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setService(data))
      }, [serviceId])
      return [service]
}
export default useServices;
