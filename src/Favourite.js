import React from "react";
import Poem from "./Poem";

function Favourite() {
  const favoriteData = JSON.parse(localStorage.getItem("poems")) || [];

  return (
    <div className='text-2xl flex items-center justify-center text-white font-extrabold p-4 text-center'>
      <div className="p-4 my-6">
      {favoriteData &&
        favoriteData.map((item, index) => {
          return <Poem key={index} item={item} />;
        })}
    </div>
    </div>
  );
}

export default Favourite;