import { useParams } from "react-router-dom";

const RestaurantPage = () => {
    const {id} = useParams();

    console.log("getuseparams",id)
  return (
    <div className="p-4 my-4">
      <div className="flex justify-center items-center flex-col gap-6">
        <div className="items-start">
          <h1 className="text-2xl font-bold text-black text-start">Pizza Hut</h1>
        </div>
        <div className=" border border-gray-400 shadow-xl rounded-lg p-4">
            <div className="flex gap-1">
                <img src="" alt="star-icon" />
                <h3>4.3(2.4K+ ratings)</h3>
                <h3>350 for two</h3>
            </div>
            <div>
                <h2>Pizzas</h2>
            </div>
        </div>

        <div className="border-b bottom-1 border-gray-600 w-96 my-4"></div>
      </div>
    </div>
  );
};

export default RestaurantPage;
