import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = () => {
  return (
    <div className="border p-4 m-2">
      <h3 className="text-lg font-bold">Restaurant Name</h3>
      <p>Location: City</p>
      <Link to="/restaurant/1" className="text-blue-500">View Details</Link>
    </div>
  );
};

export default RestaurantCard;
