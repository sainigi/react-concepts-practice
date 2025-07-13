import { RESTAURANTCARD, CDN_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, sla, cuisines, costForTwo,cloudinaryImageId } = resData?.info;

  return (
    <div className="rounded-lg flex gap-5">
      <div  className="w-80 h-30 ">
        <img
          className=" rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwo}</h3>
        <h3>
          Rating - {avgRating} - {sla?.slaString}
        </h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
