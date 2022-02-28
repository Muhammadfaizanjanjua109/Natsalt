import React from 'react'
function Cards({id,title,img}) {
    return (
        <div>
               <div className="card-group">    <div className="card mt-2">
    <img className="card-img-top" src={img} alt="Card-cap"/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text"> {title}</p>
     
      <button className='btn bg-primary'>Add to Cart</button>
    </div>
  </div>
        </div>
        </div>

    )
}

export default Cards
