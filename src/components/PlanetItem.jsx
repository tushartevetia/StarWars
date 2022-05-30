import React from "react";

function PlanetItem({ planetName, planetPop }) {
  const mystyle = {
    height: isNaN(planetPop)
      ? 16
      : Math.sqrt(Math.sqrt(planetPop)) < 200
      ? Math.sqrt(Math.sqrt(planetPop))
      : 200 + Math.sqrt(Math.sqrt(Math.sqrt(planetPop))),
  };
  return (
    <>
      <div className=" flex flex-col justify-center items-center rounded-md border-2 border-slate-500 drop-shadow-md shadow-slate-400 overflow-hidden p-3 m-5 text-white w-[320px]  flex-1">
        <div
          style={mystyle}
          className="flex justify-center items-center font-semibold text-xl text-slate-100"
        >
          <h1>{planetName}</h1>
        </div>
        {/* <p>{planetPop}</p> */}
      </div>
    </>
  );
}

export default PlanetItem;
