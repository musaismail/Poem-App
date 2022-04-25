import React, { useState } from "react"
import Poem from "./Poem";


const PoemList = ()=> {
   const[Poems, setPoem]= useState([]);
 

  function handleClick(){
       fetch(`https://poetrydb.org/random/20`)
       .then(res=>{
           return res.json();
       })
       .then(data=>{
           setPoem(data)
       })
       }
       const getSortingData = (data) => {
        const sortingData = data.target.value;
     if(sortingData==='title'){
         const sortedPoems = [...Poems].sort(function (a, b) {
         return a.title.localeCompare(b.title); 
      }) ; 
      setPoem(sortedPoems);
    }else if(sortingData ==='author'){
        const sortedPoems = [...Poems].sort(function (a, b) {
            return a.author.localeCompare(b.author); 
        }) ;
        setPoem(sortedPoems);   
    }; 
  
    };
return(
    <div  className=" "> 
    <div className="items-center justify-center  flex flex-col ">
      <div className="">
      <div className="items-center justify-center flex py-6  ">
        <button className="text-center rounded-lg px-4 py-3  m-2 hover:bg-purple-800 hover:text-yellow-100 bg-yellow-500 border-2 border-blue-200 text-white font-bold text-lg shadow-md shadow-[#040c16]"
         onClick={handleClick}>Fetch Poem</button>
     </div>
       {Poems.length? (<select className="text-center rounded-lg px-4 py-3 m-2 hover:text-yellow-100 hover:bg-purple-800 border-2 border-blue-200 text-white bg-yellow-500 font-bold text-lg shadow-md shadow-[#040c16]" 
       onChange={getSortingData}>
            <option className="text-2xl">Select accordingly</option>
            <option className="text-2xl" value='title'>Title</option>
            <option className="text-2xl" value='author'>Author</option>
        </select>):('')}
     </div>
    <div className="text-2xl text-center text-white max-w-[600px] font-bold py-6 px-5 my-6">
        {Poems.map((item,index)=>{
            return <Poem key={index} item={item}/>
        })}
    </div>
   </div>
   </div>
   );
}

export default PoemList;
