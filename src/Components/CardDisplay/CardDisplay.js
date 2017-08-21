import React from "react";
import "./CardDisplay.css";
import Card from "../Card/Card";

const CardDisplay = ({ itemData }) => {
  let itemCard;

  if (itemData) {
    itemCard = itemData.map((el, i) => <Card key={i} person={el.name} />);
    console.log(itemData[0].homeworld);
  }

  return (
    <div className="card-container">
      {itemCard}
    </div>
  );
};

export default CardDisplay;
