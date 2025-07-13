import RestaurantCard from "./ResaturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [rescards, setRescards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRescards, setFilteredRescards] = useState([]);

  useEffect(() => {
    fetchData();
    // console.log("UseEffect call only once");
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      setRescards(
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRescards(
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (er) {
      console.log("error", er);
    }
  }

  if (!rescards) return null;
  return rescards?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-6 m-3  ">
      <div className="mb-3 flex gap-5">
        <input
          type="text"
          className="border-black border px-2 rounded-lg"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 rounded-lg px-4 py-1 hover:bg-blue-600 text-white"
          onClick={() => {
            const filtered = rescards.filter((rescard) =>
              rescard?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRescards(filtered);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex gap-5 w-full flex-wrap">
        {filteredRescards.map((rescard) => (
          <Link to={`/restaurant/${rescard?.info?.id}`}>
            <RestaurantCard key={rescard?.info?.id} resData={rescard} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
