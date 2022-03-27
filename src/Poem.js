import React from "react";
//import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Poem({ item }) {
  return (
    <>
      <div className="my-3">
        <div>
          <Link to={"/" + item.title.split(" ").join("-")} state={{ item }}>
            <div>{item.title}</div>
          </Link>
          <div>{item.author}</div>
        </div>
      </div>
    </>
  );
}

export default Poem;