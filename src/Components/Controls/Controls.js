import React from "react";
import "./Controls.css";
import dashboard from '../../assets/dashboard.png';
import boba from '../../assets/boba.mp4';

const Controls = ({ apiCall, toggleFav }) => {
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
          <div onClick={() => toggleFav()} className="button">
            <p className='button-title'>FAVORITES</p>
          </div>
        </section>

        <section className='boba-container'>
          <video poster={ boba } className='boba-video' playsInline autoPlay muted loop>
              <source src={ boba } type='video/webm'></source>
              <source src={ boba } type='video/mp4'></source>
          </video>
        </section>



      </section>
     </div>

  );
};

export default Controls;
