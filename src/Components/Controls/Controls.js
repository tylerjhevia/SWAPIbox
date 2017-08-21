import React from "react";

const Controls = ({ apiCall }) => {
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
      <div onClick={e => apiCall(e.target.innerHTML)} className="favorite-btn">
        Favorite
      </div>
    </div>
  );
};

export default Controls;
