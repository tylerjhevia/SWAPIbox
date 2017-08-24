import React from "react";
import "./CardDisplay.css";
import Card from "../Card/Card";
import { object, array, func } from "prop-types";

const CardDisplay = ({ itemData, favorites, favCards, clickCard }) => {
  let itemCard;
  console.log(favCards);

  /*if (favClicked) {
    const mappedFavs = favCards.map((el, i) =>
      <Card key={i} itemData={el} favorites={favorites} clickCard={clickCard} />
    );
    return (
      <div className="outer-card-container">
        <section className="card-container">
          {mappedFavs}
        </section>
        <div className="card-container-spacer" />
      </div>
    );
  }*/

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
