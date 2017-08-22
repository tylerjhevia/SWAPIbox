import React, { Component } from 'react';
import backgroundVideo from '../../assets/stars-background.mp4';
import backgroundAudio from '../../assets/01 Star Wars_ Main Title.m4a';
import logoHollow from '../../assets/SWAPI-LOGO-HOLLOW.png';
import logoSolid from '../../assets/SWAPI-LOGO-SOLID.png';
import PropTypes from 'prop-types';
import './Background.css';

const Background = () => {

    return (
      <div>

        <section className='video-container'>
          <video poster={ backgroundVideo } className='stars-video' playsInline autoPlay muted loop>
              <source src={ backgroundVideo } type='video/webm'></source>
              <source src={ backgroundVideo } type='video/mp4'></source>
          </video>


          <section className='outer-swapi-container'>
            <section className='swapi-container'>
             <img className='swapi-title' src={ logoHollow }/>
            </section>
          </section>

          <div className='fade'></div>

          <section className='scroll-container'>
            <div className='inner-scroll-box'>
              <div className='title-box'>
                <p>Episode IV</p>
                <h1>A New Hope</h1>
              </div>

              <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p>

                <p>During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.</p>

              <p>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy….</p>
            </div>
          </section>

        </section>



        <audio className='background-audio' autoPlay loop>
          <source src={ backgroundAudio }></source>
        </audio>

      </div>
    );

}

export default Background;
