import React from "react";
function Header() {
  return (
    <div
      className="flex justify-center items-center text-[30px] text-white bg-[#303030]  m-auto font-extrabold rounded-sm shadow-lg relative
    w-full"
    >
      <img
        src="https://us.123rf.com/450wm/avectors/avectors1809/avectors180900110/108090601-starry-sky-space-background-of-perfect-dark-night-and-twinkling-stars-vector-real-stars-and-planets-.jpg?ver=6"
        alt="swordimg"
        className="w-full h-16"
      />
      <h1 className="absolute bg-[rgba(0,0,0,0.5) w-full opacity-1 text-center">
        StarWars
      </h1>
    </div>
  );
}

export default Header;
