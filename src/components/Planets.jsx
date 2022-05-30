import React, { useContext, useEffect, useState } from "react";
import { planetContext } from "./Context";
import PlanetItem from "./PlanetItem";

function Planets() {
  const { isloggedin } = useContext(planetContext);
  const [searchvalue, setSearchValue] = useState("");
  const [planets, setPlanets] = useState([]);

  const planetApi = async () => {
    await fetch("https://swapi.dev/api/planets")
      .then((res) => res.json())
      .then((res) => setPlanets(res.results));
  };

  useEffect(() => {
    planetApi();
  }, []);

  if (isloggedin) {
    return (
      <div className="flex relative w-full">
        <img
          src="https://wallpaperaccess.com/full/1987338.jpg"
          alt="bgimg"
          className="w-full  block opacity-40 min-w-full object-fill h-[100vh]"
        />
        <div className="flex flex-col justify-center items-center p-4 absolute bg-[rgba(0,0,0,0.5) w-full opacity-1">
          <input
            type="text"
            className="w-[300px] rounded-full p-2 m-2 focus:outline-none text-base"
            placeholder="Search Planet"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="flex flex-col flex-wrap ">
            {searchvalue
              ? planets
                  .filter((d) => {
                    return d.name
                      .toLowerCase()
                      .includes(searchvalue.toLowerCase());
                  })
                  .sort((a, b) => (a.population < b.population ? 1 : -1))
                  .map((d) => {
                    return (
                      <PlanetItem
                        key={d.name}
                        planetName={d.name}
                        planetPop={d.population}
                      />
                    );
                  })
              : planets.map((d) => {
                  return (
                    <PlanetItem
                      key={d.name}
                      planetName={d.name}
                      planetPop={d.population}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
}

export default Planets;
