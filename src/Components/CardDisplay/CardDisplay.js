import React from "react";
import "./CardDisplay.css";
import Card from "../Card/Card";
import { object, array, func } from "prop-types";

const CardDisplay = ({ itemData, favorites, favCards, clickCard, favClicked }) => {
  let itemCard;

  if (favCards.length === 0 && favClicked) {
    return (
      <div className="loading">
        <div className='no-fav-container'>
          <p className='no-favorites'>!WARNING!<br></br>NO FAVORITES SELECTED</p>
        </div>
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
  itemData: object,
  favorites: func,
  favCards: array,
  clickCard: func
};
