import React from "react";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { id } = useParams();
  return <div className="p-4">Details for Restaurant {id}</div>;
};

export default RestaurantDetails;