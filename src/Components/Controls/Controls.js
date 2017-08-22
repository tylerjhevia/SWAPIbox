import React from "react";
import "./Controls.css";
import dashboard from '../../assets/dashboard.png';

const Controls = ({ apiCall }) => {
  return (
    <div>

      <section className='controls-container'>
        <img className='dashboard' src={ dashboard } />



          <section className="button-container">
            <div className='button' onClick={e => apiCall(e.target.innerHTML)}>
              <p className='button-title'>PEOPLE</p>
            </div>
            <div className='button' onClick={e => apiCall(e.target.innerHTML)}>
              <p className='button-title'>PLANETS</p>
            </div>
            <div className='button' onClick={e => apiCall(e.target.innerHTML)}>
              <p className='button-title'>VEHICLES</p>
            </div>
            <div className='button' onClick={e => apiCall(e.target.innerHTML)}>
              <p className='button-title'>FAVORITES</p>
            </div>
          </section>



      </section>
     </div>
  );
};

export default Controls;
