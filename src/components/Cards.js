import React from 'react'
import image from '../Images/1C.jpg'
function Cards({id,title,img}) {
    return (
        <div>
               <div className="card-group">    <div className="card mt-2">
    <img className="card-img-top" src={img} alt="Card  cap"/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text"> {title}</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
        </div>
        </div>

    )
}

export default Cards
