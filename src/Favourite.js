import React from "react";
import Poem from "./Poem";

function Favourite() {
  const favoriteData = JSON.parse(localStorage.getItem("poems")) || [];

  return (
    <div className='favourite'>
      {favoriteData &&
        favoriteData.map((item, index) => {
          return <Poem key={index} item={item} />;
        })}
    </div>
  );
}

export default Favourite;