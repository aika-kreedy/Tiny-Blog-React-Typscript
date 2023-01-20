import React from 'react';
interface Icategory{
    category:string[];
    filterList:(c:string) => void 

}
const Catagries = ({category,filterList}:Icategory) => {

  //const x = category5Arr.map((p)=>p.includes(value) === true);
  return (
  
<div className='catagories-list'>
      {category.map((ca:string,index:number)=>{
         return (
          <button
 type='button'
 className="filter-btn" 
 key={index} 
 onClick={()=>filterList(ca)}>
   {ca}</button>
         )})}
</div>
) 
}
  


export default Catagries;