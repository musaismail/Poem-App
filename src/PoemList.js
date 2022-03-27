import React, { useEffect, useState } from "react"
import Poem from "./Poem";

const PoemList = ()=> {
   const[Poems, setPoem]= useState([]);
 
 
 
   useEffect(()=>{
     handleClick()
    },[])
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
    <div> 
        <button id="fetchbutton" onClick={handleClick}>Fetch Poem</button>
       {Poems.length? (<select className="select" onChange={getSortingData}>
            <option>Select accordingly</option>
            <option value='title'>Title</option>
            <option value='author'>Author</option>
        </select>):('')}
        
    <div>
        {Poems.map((item,index)=>{
            return <Poem key={index} item={item}/>
        })}
    </div>
   </div>
   );
}

export default PoemList;