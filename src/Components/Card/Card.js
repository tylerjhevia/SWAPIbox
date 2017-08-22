import React from "react";
import Helper from "../Helper/Helper"
import "./Card.css";

const Card = props => {
  const personCard = () => {
    return (
      <div className="card person-card">
        <div className='card-background'></div>
        <h3 className="card-name">
          {" "}{props.itemData.name}{" "}
        </h3>
        <p className="species">
          {props.itemData.species}
        </p>
        <p className="homeworld">
          {Helper(props.itemData.homeworld)}
        </p>
        <p className="population">1,000,000</p>
      </div>
    );
  };

  const vehicleCard = () => {
    return (
      <div className="card vehicle-card">
        <div className='card-background'></div>
        <h3 className="vehicle-name">
          {props.itemData.name}
        </h3>
        <p className="model">
          {props.itemData.model}
        </p>
        <p className="vehicle-class">
          {props.itemData.vehicle_class}
        </p>
        <p className="passenger-count">
          {props.itemData.passengers}
        </p>
      </div>
    );
  };

  const planetCard = () => {
    return (
      <div className="card planet-card">
        <div className='card-background'></div>
        <h3 className='planet-name'>
          {props.itemData.name}
        </h3>
        <p className='terrain'>
          {props.itemData.terrain}
        </p>
        <p className='population'>
          {props.itemData.population}
        </p>
        <p className='climate'>
          {props.itemData.climate}
        </p>
        <p className='residence'>
          residence
        </p>
      </div>
    );
  };

  if (props.itemData.model) {
    return vehicleCard();
  }

  if (props.itemData.climate) {
    return planetCard();
  }

  if (props.itemData.species) {
    return personCard();
  }
};

export default Card;
