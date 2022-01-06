import React ,{useState} from 'react'
import './Services.css';
import Datas from './Data.js';
import Cards from './Cards';
const Services = () => {
 const [Data,updateData]=useState(Datas);
    return (
     
   <div className="container-fluid mt-2">
    
  {Data.map((cur)=>{
  const {id,title,img}=cur;
 return (<Cards id={id} title={title} img={img}/>)
  })}
   </div>
    )
}

export default Services
