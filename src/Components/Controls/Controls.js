import React from "react";

const Controls = ({ apiCall, toggleFav }) => {
  return (
    <div className="buttons">
      <div onClick={e => apiCall(e.target.innerHTML)} className="people-btn">
        People
      </div>
      <div onClick={e => apiCall(e.target.innerHTML)} className="planet-btn">
        Planets
      </div>
      <div onClick={e => apiCall(e.target.innerHTML)} className="vehicle-btn">
        Vehicles
      </div>
      <div onClick={() => toggleFav()} className="favorite-btn">
        Show Favorites
      </div>
    </div>
  );
};

export default Controls;
