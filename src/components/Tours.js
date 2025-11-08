import React from "react";
import Title  from "./Title";
import {tourData} from "../data"
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Feaured" subtitle="Tours"/>

      <div className="section-center featured-center">
      {tourData.map((tour)=>{
        const {id, image, tourdate, title, text, location, duration, price}=tour
        return(
          <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={image} className="tour-img" alt="" />
            <p className="tour-date">{tourdate}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {text}
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{location}
              </p>
              <p>{duration}</p>
              <p>from {price}</p>
            </div>
          </div>
        </article>
        );
      })}
        


      </div>
    </section>
  );
};

export default Tours;
