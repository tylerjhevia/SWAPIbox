import React from "react";
import "./CardDisplay.css";
import Card from "../Card/Card";

const CardDisplay = ({ itemData, favorites, favClicked, favCards }) => {
  let itemCard;

  if (favClicked) {
    const mappedFavs = favCards.map((el, i) => <Card key={i} itemData={el} />);
    return (
      <div className="fav-container">
        {mappedFavs}
      </div>
    );
  }

  if (itemData) {
    itemCard = itemData.map((el, i) =>
      <Card key={i} itemData={el} favorites={favorites} />
    );
  }

  return (
    <div className="card-container">
      {itemCard}
    </div>
  );
};

export default CardDisplay;
