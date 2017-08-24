import React from "react";
import "./CardDisplay.css";
import Card from "../Card/Card";
import standBy from '../../assets/LOCK_S.WAV';
import chewy from '../../assets/Chewbacca roar (1).mp3';
import { object, array, func } from "prop-types";

const CardDisplay = ({ itemData, favorites, favCards, clickCard, favClicked, api }) => {
  let itemCard;

  if(api === false) {
    return (
      <div className="api-fail">
        <div className='api-fail-container'>
          <p className='failed-api'>!ABORT!<br></br>API CALL FAILURE<br></br>REFRESH</p>
        </div>
        <audio className="standing-by-audio" autoPlay loop>
          <source src={ chewy } />
        </audio>
      </div>
    )
  }

  if (favCards.length === 0 && favClicked) {
    return (
      <div className="loading">
        <div className='no-fav-container'>
          <p className='no-favorites'>!WARNING!<br></br>NO FAVORITES SELECTED</p>
        </div>
        <audio className="standing-by-audio" autoPlay >
          <source src={ standBy } />
        </audio>
      </div>
    )
  }

  if (itemData) {
    itemCard = itemData.map((el, i) =>
      <Card
        key={i}
        itemData={el}
        favorites={favorites}
        clickCard={clickCard}
        className={favCards.includes(el) ? "card clicked-card" : "card"}
      />
    );
  }

  return (
    <div className="outer-card-container">
      <section className="card-container">
        {itemCard}
        <div className="card-container-spacer" />
      </section>
      <div className="card-container-spacer" />
    </div>
  );
};

export default CardDisplay;

CardDisplay.propTypes = {
  // itemData: PropTypes.oneOfType([
  //   object,
  //   array
  // ]),
  itemData: array,
  favorites: func,
  favCards: array,
  clickCard: func
};
