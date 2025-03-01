import React from "react";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Details for Restaurant {id}</h2>
      <p>More details about the restaurant will be shown here.</p>
    </div>
  );
};
export default RestaurantDetails;
