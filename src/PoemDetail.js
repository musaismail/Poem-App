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
      <div className="w-full h-full">
        <div className="flex items-center justify-between m-4">
        <button className="text-center rounded-lg px-4 py-3  m-2 hover:bg-purple-800 hover:text-yellow-100 bg-yellow-500 border-2 border-blue-200 text-white font-bold text-lg shadow-md shadow-[#040c16]"
         onClick={addFavorite}>
          Add to favourite
        </button>
        <button className="text-center rounded-lg px-4 py-3  m-2 hover:bg-purple-800 hover:text-yellow-100 bg-yellow-500 border-2 border-blue-200 text-white font-bold text-lg shadow-md shadow-[#040c16]"
        onClick={removeFavorite}>
          Remove from favourite
        </button>
        <Link  to="/my-favorite">
         <button className="text-center rounded-lg px-4 py-3  m-2 hover:bg-purple-800 hover:text-yellow-100 bg-yellow-500 border-2 border-blue-200 text-white font-bold text-lg shadow-md shadow-[#040c16]" > 
           Favourite Poems
           </button>
        </Link>
        </div>
        <div className="flex items-center justify-center m-4 py-3 text-white font-bold text-2xl  ">
        <table striped bordered hover >
          <tbody>
            <tr>
              <td>
                <h3 className="text-4xl">{poem.title}</h3>
              </td>
            </tr>
            <tr>
              <td className="text-3xl"> by: {poem.author}</td>
            </tr>
            <tr className="py-3 m-4">
              <td >
                {poem.lines.map((lyric, index) => {
                  return (
                    <p key={index} className="lyric">
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