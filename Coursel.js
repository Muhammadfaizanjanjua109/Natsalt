import React from "react";

function Coursel(props) {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        {props.data.map((index, id) => {
          return (
            <>
              <div
                key={id}
                className={
                  index.active === "true"
                    ? "carousel-item active"
                    : "carousel-item"
                }
              >
                <img
                  src={index.src}
                  className="d-block w-100"
                  alt={index.alt}
                />
              </div>
            </>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}

export default Coursel;
