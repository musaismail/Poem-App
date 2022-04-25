import React from "react";
import { Link } from "react-router-dom";

function Poem({ item }) {
  return (
    <>
      <div className="w-full h-full shadow-md shadow-[#040c16] p-3 my-3 hover:scale-110">
        <div>
          <Link to={"/" + item.title.split(" ").join("-")} state={{ item }}>
            <div className=''>{item.title}</div>
          </Link>
          <div className=''>{item.author}</div>
        </div>
      </div>
    </>
  );
}

export default Poem;