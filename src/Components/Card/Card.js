import React from "react";
import chewyAudio from "../../assets/Chewbacca roar.mp3";
import haveYouAudio from "../../assets/I have you now.mp3";
import strongAudio from "../../assets/Strong with the force.mp3";
import personScan from "../../assets/person-scan.mp4";
import vehiclesScan from "../../assets/vehicles-video.mp4";
import planetScan from "../../assets/planet-scan.mp4";
import "./Card.css";

const Card = props => {
  const personCard = () => {
    return (
      <div
        className="card person-card"
        onClick={e => {
          props.favorites(props.itemData), props.clickCard(e.currentTarget);
        }}
      >
        <div className="card-background" />
        <h3 className="card-name">
          {" "}{props.itemData.name}{" "}
        </h3>
        <p className="species">
          {props.itemData.species}
        </p>
        <p className="homeworld">
          {props.itemData.homeworld}
        </p>
        <p className="population">
          {props.itemData.population}
        </p>
        <div className="card-video-container person-video">
          <video
            poster={personScan}
            className="card-video person-video"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={personScan} type="video/webm" />
            <source src={personScan} type="video/mp4" />
          </video>
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
          props.favorites(props.itemData), props.clickCard(e.currentTarget);
        }}
      >
        <div className="card-background" />
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
        <div className="card-video-container vehicle-video">
          <video
            poster={vehiclesScan}
            className="card-video vehicle-video"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={vehiclesScan} type="video/webm" />
            <source src={vehiclesScan} type="video/mp4" />
          </video>
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
          props.favorites(props.itemData), props.clickCard(e.currentTarget);
        }}
      >
        <div className="card-background" />
        <h3 className="planet-name">
          {props.itemData.name}
        </h3>
        <p className="terrain">
          {props.itemData.terrain}
        </p>
        <p className="population">
          {props.itemData.population}
        </p>
        <p className="climate">
          {props.itemData.climate}
        </p>
        <div className="card-video-container planet-video">
          <video
            poster={planetScan}
            className="card-video planet-video"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={planetScan} type="video/webm" />
            <source src={planetScan} type="video/mp4" />
          </video>
        </div>
        <p className="residence">residence</p>
        <audio className="background-audio" autoPlay>
          <source src={strongAudio} />
        </audio>
      </div>
    );
  };
  // use switch case
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
