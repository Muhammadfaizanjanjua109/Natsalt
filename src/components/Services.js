import React ,{useState} from 'react'
import './Services.css';
import Datas from './Data.js';
import Cards from './Cards';
const Services = () => {
 const [Data,updateData]=useState(Datas);
    return (
     
 

   <div  className='row'>
       <div  className='col-10 mx-auto'>
       <div className="container-fluid mt-2  row">
    
 
  
    {Data.map((cur)=>{
     const {id,title,img}=cur;
    return (
       <div className='col-lg-4'><Cards id={id} className="col-lg-4" title={title} img={img}/>  </div>)
     })}
    
    
      </div>
       </div>
   </div>
    )
}

export default Services
