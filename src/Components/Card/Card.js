import React from "react";
import chewyAudio from "../../assets/Chewbacca roar.mp3";
import haveYouAudio from "../../assets/I have you now.mp3";
import strongAudio from "../../assets/Strong with the force.mp3";
import personScan from "../../assets/person-scan.gif";
import shipScan from "../../assets/ship-scan.gif";
import planetScan from "../../assets/planet-scan.gif";
import "./Card.css";
import { func, string } from "prop-types";

const Card = props => {
  const {
    name,
    species,
    homeworld,
    population,
    vehicle_class,
    passengers,
    model,
    terrain,
    climate
  } = props.itemData;

  const { favorites, clickCard } = props;
  const personCard = () => {
    return (
      <div
        className="card person-card"
        onClick={e => {
          favorites(props.itemData), clickCard(e.currentTarget);
        }}
      >
        <div className="card-background" />
        <h3 className="card-name">
          {" "}{name}{" "}
        </h3>
        <p className="species">
          {species}
        </p>
        <p className="homeworld">
          {homeworld}
        </p>
        <p className="population">
          {population}
        </p>
        <div className="card-video-container person-video">
          <img className='card-video' src={ personScan }/>
        </div>
        <audio className="background-audio" autoPlay>
          <source src={chewyAudio} />
        </audio>
      </div>
    );
  };

  const vehicleCard = () => {
    return (
      <div
        className="card vehicle-card"
        onClick={e => {
          favorites(props.itemData), clickCard(e.currentTarget);
        }}
      >
        <div className="card-background" />
        <h3 className="vehicle-name">
          {name}
        </h3>
        <p className="model">
          {model}
        </p>
        <p className="vehicle-class">
          {vehicle_class}
        </p>
        <p className="passenger-count">
          {passengers}
        </p>
        <div className="card-video-container vehicle-video">
          <img className='card-video' src={ shipScan }/>
        </div>
        <audio className="background-audio" autoPlay>
          <source src={haveYouAudio} />
        </audio>
      </div>
    );
  };

  const planetCard = () => {
    return (
      <div
        className="card planet-card"
        onClick={e => {
          favorites(props.itemData), clickCard(e.currentTarget);
        }}
      >
        <div className="card-background" />
        <h3 className="planet-name">
          {name}
        </h3>
        <p className="terrain">
          {terrain}
        </p>
        <p className="population">
          {population}
        </p>
        <p className="climate">
          {climate}
        </p>
        <div className="card-video-container planet-video">
          <img className='card-video' src={ planetScan }/>
        </div>
        <p className="residence">residence</p>
        <audio className="background-audio" autoPlay>
          <source src={strongAudio} />
        </audio>
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

Card.propTypes = {
  favorites: func,
  clickCard: func,
  name: string,
  species: string,
  homeworld: string,
  population: string,
  vehicle_class: string,
  passengers: string,
  model: string,
  terrain: string,
  climate: string
};
