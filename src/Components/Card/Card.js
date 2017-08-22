import React from "react";

const Card = props => {
  const personCard = () => {
    return (
      <div className="card person-card">
        <h3 className="card-name">
          {" "}{props.itemData.person}{" "}
        </h3>
        <p className="species">
          {props.itemData.species}
        </p>
        <p className="homeworld">
          {props.itemData.homeworld}
        </p>
        <p className="population">1,000,000</p>
      </div>
    );
  };

  const vehicleCard = () => {
    return (
      <div className="card vehicle-card">
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
    return <div className="card planet-card">Planetz</div>;
  };

  if (props.itemData.model) {
    return vehicleCard();
  }

  if (props.itemData.climate) {
    return <p>Planetz</p>;
  }

  if (props.itemData.species) {
    return personCard();
  }
};

export default Card;
