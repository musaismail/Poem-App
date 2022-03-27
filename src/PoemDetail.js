import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function PoemDetail() {
  const location = useLocation();
  const poem = location.state.item;

  const addFavorite = () => {
    const poems = JSON.parse(localStorage.getItem("poems")) || [];
    const isAdded = poems.some((item) => {
      if (item.title === poem.title) {
        return true;
      } else {
        return false;
      }
    });
    if (!isAdded) {
      poems.push(poem);
      localStorage.setItem("poems", JSON.stringify(poems));
    }
  };

  const removeFavorite = () => {
    const poems = JSON.parse(localStorage.getItem("poems")) || [];
    const updatedPoems = poems.filter((item) => item.title !== poem.title);
    localStorage.setItem("poems", JSON.stringify(updatedPoems));
  };

  return (
    <div>
      <div className="p-5">
        <button className="f addfavourite" onClick={addFavorite}>
          Add to favourite
        </button>
        <button className="f removefavourite" onClick={removeFavorite}>
          Remove from favourite
        </button>
        <Link  to="/my-favorite">
         <button className="f favourite"> Favourites</button>
        </Link>
        <table striped bordered hover>
          <tbody>
            <tr>
              <td>
                <h3>{poem.title}</h3>
              </td>
            </tr>
            <tr>
              <td> by: {poem.author}</td>
            </tr>
            <tr>
              <td>
                {poem.lines.map((lyric, index) => {
                  return (
                    <p key={index} className="text-center">
                      {lyric}
                    </p>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PoemDetail;