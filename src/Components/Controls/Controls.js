import React from "react";
import "./Controls.css";
import dashboard from "../../assets/dashboard.png";
import boba from "../../assets/boba.mp4";
import dash2 from "../../assets/dashboard2.mp4";
import digitalVideo from "../../assets/dash1.mp4";
import r2 from "../../assets/r2.png";

const Controls = ({ apiCall, toggleFav, clickBtn }) => {
  return (
    <div>
      <section className="controls-container">
        <img className="dashboard" src={dashboard} />

        <section className="button-container">
          <div
            className="button"
            onClick={e => {
              apiCall(e.target.innerHTML), clickBtn(e.currentTarget);
            }}
          >
            <p className="button-title">PEOPLE</p>
          </div>
          <div
            className="button"
            onClick={e => {
              apiCall(e.target.innerHTML), clickBtn(e.currentTarget);
            }}
          >
            <p className="button-title">PLANETS</p>
          </div>
          <div
            className="button"
            onClick={e => {
              apiCall(e.target.innerHTML), clickBtn(e.currentTarget);
            }}
          >
            <p className="button-title">VEHICLES</p>
          </div>
          <div onClick={() => toggleFav()} className="button">
            <p className="button-title">FAVORITES</p>
          </div>
        </section>

        <section className="boba-container">
          <div className="video-overlay" />
          <video
            poster={boba}
            className="boba-video"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={boba} type="video/webm" />
            <source src={boba} type="video/mp4" />
          </video>
        </section>

        <section className="screen1">
          <div className="video-overlay" />
          <video
            poster={digitalVideo}
            className="screen1-video"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={digitalVideo} type="video/webm" />
            <source src={digitalVideo} type="video/mp4" />
          </video>
        </section>

        <section className="screen2">
          <div className="video-overlay" />
          <video
            poster={dash2}
            className="screen2-video"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={dash2} type="video/webm" />
            <source src={dash2} type="video/mp4" />
          </video>
        </section>

        <section className="favCount">
          <div className="video-overlay2" />
          <p className="favorite-counter">FAVORITE COUNETR</p>
        </section>

        <section className="counter">
          <div className="video-overlay3" />
          <p className="counter-count">10</p>
        </section>

        <img className="r2" src={r2} />
      </section>
    </div>
  );
};

export default Controls;
