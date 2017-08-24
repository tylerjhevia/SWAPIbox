import React, { Component } from "react";
import "./Controls.css";
import dashboard from '../../assets/dashboard.png';
import boba from '../../assets/boba.mp4';
import dash2 from '../../assets/dashboard2.mp4';
import digitalVideo from '../../assets/dash1.mp4';
import r2 from '../../assets/r2.png';
import yodaHead from '../../assets/yoda-head.png';
import yoda from '../../assets/yoda-body.png';
import solidLogo from '../../assets/SWAPI-LOGO-SOLID.png';
import topDashBoard from '../../assets/top-dashborad.png';
import lightSpeed from '../../assets/light speed.mp4';
import r2d2 from '../../assets/Excited R2D2.mp3';
import beer from '../../assets/rainier.png';
import { func } from "prop-types"

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightSpeed: 'light-speed-container hide',
      yodaSpeed: 'yoda-head',
      r2Speed: 'r2',
      peopleButton: 'button',
      planetButton: 'button',
      vehicleButton: 'button',
      favoriteButton: 'button',
      beer: 'beer'
    };
  }

  lightSpeedOn(callType) {
    this.buttonCheck(callType);
    setTimeout(() => {this.props.selectCategory(callType)}, 3700);
    setTimeout(() => { this.lightSpeedOff(); }, 4200);
    this.setState({
      lightSpeed: 'light-speed-container',
      yodaSpeed: 'yoda-head yoda-light-speed',
      r2Speed: 'r2 r2-light-speed',
      beer: 'beer beer-light-speed'
    })
  }

  lightSpeedOff() {
    this.setState({
      lightSpeed: 'light-speed-container hide',
      yodaSpeed: 'yoda-head',
      r2Speed: 'r2',
      beer: 'beer'
    })
  }

  buttonCheck(callType) {
    if(callType === "PEOPLE") {
      this.setState({
        peopleButton: ' button button-clicked',
        planetButton: 'button',
        vehicleButton: 'button',
        favoriteButton: 'button'
      })
    }
    if(callType === "PLANETS") {
      this.setState({
        peopleButton: 'button',
        planetButton: ' button button-clicked',
        vehicleButton: 'button',
        favoriteButton: 'button'
      })
    }
    if(callType === "VEHICLES") {
      this.setState({
        peopleButton: 'button',
        planetButton: 'button',
        vehicleButton: 'button button-clicked',
        favoriteButton: 'button'
      })
    }
    if(callType === "FAVORITES") {
      this.setState({
        peopleButton: 'button',
        planetButton: 'button',
        vehicleButton: 'button',
        favoriteButton: 'button button-clicked'
      })
    }
  }


  render() {

    const { apiCall, toggleFav, clickBtn, favoriteCards, favClicked } = this.props;

    return (

      <div>

        <section className={ this.state.lightSpeed }>
          <video poster={ lightSpeed } className='light-speed-video' autoPlay playsInline muted loop>
              <source src={ lightSpeed } type='video/webm'></source>
              <source src={ lightSpeed } type='video/mp4'></source>
          </video>
          <audio className="r2-audio hide" autoPlay >
            <source src={ r2d2 } />
          </audio>
        </section>

        <div className='upper-dash-container'>
          <img className='upper-dash' src={ topDashBoard }/>
          <img className={ this.state.r2Speed } src={ r2 }/>
        </div>

        <div className='yoda-box'>
          <img className={ this.state.yodaSpeed } src={ yodaHead }/>
          <img className='yoda' src={ yoda }/>
        </div>

        <div className='beer-box'>
          <img className={ this.state.beer } src={ beer }/>
        </div>

        <section className='controls-container'>
          <img className='dashboard' src={ dashboard } />

          <section className="button-container">
            <div className={ this.state.peopleButton } onClick={ e => this.lightSpeedOn(e.target.innerHTML) }>
              <p className='button-title'>PEOPLE</p>
            </div>
            <div className={ this.state.planetButton } onClick={ e => this.lightSpeedOn(e.target.innerHTML) }>
              <p className='button-title'>PLANETS</p>
            </div>
            <div className={ this.state.vehicleButton} onClick={ e => this.lightSpeedOn(e.target.innerHTML) }>
              <p className='button-title'>VEHICLES</p>
            </div>

            <div className={ this.state.favoriteButton } onClick={ e => this.lightSpeedOn(e.target.innerHTML) }>
              <p className='button-title'>FAVORITES</p>
            </div>
          </section>

          <section className='boba-container'>
            <div className='video-overlay'></div>
            <video poster={ boba } className='boba-video' playsInline autoPlay muted loop>
                <source src={ boba } type='video/webm'></source>
                <source src={ boba } type='video/mp4'></source>
            </video>
          </section>

          <section className='screen1'>
            <div className='video-overlay'></div>
            <video poster={ digitalVideo } className='screen1-video' playsInline autoPlay muted loop>
                <source src={ digitalVideo } type='video/webm'></source>
                <source src={ digitalVideo } type='video/mp4'></source>
            </video>
          </section>

          <section className='screen2'>
            <div className='video-overlay'></div>
            <video poster={ dash2 } className='screen2-video' playsInline autoPlay muted loop>
                <source src={ dash2 } type='video/webm'></source>
                <source src={ dash2 } type='video/mp4'></source>
            </video>
          </section>

          <section className='favCount-container'>
            <section className='favCount'>
              <div className='video-overlay2'></div>
              <p className='favorite-counter'>FAVORITE COUNTER</p>
            </section>
            <section className='counter'>
              <div className='video-overlay3'></div>
              <p className='counter-count'>{this.props.favoriteCards.length}</p>
            </section>
          </section>
        </section>
       </div>

     );
   }

};

export default Controls;

Controls.propTypes = {
  apiCall: func,
  toggleFav: func
};
