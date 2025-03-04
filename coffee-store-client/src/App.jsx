import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log(coffees);

  return (
    <>
      <div>
        <div className="text-center py-20">
          <span>--- Sip & Savor ---</span>
          <h2 className="text-3xl py-5">
            Our Popular Products : {coffees.length}
          </h2>
          <Link className="flex mx-auto justify-center" to={"/addCoffee"}>
            <button className="bg-[#D2B48C] font-bold cursor-pointer border-[#331A15] border p-2">
              Add Coffee
            </button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 gap-16 mb-20">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </>
  );
}

export default App;
