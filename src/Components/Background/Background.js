import React, { Component } from "react";
import backgroundVideo from "../../assets/stars-background.mp4";
import backgroundAudio from "../../assets/01 Star Wars_ Main Title.m4a";
import logoHollow from "../../assets/SWAPI-LOGO-HOLLOW.png";
import logoSolid from "../../assets/SWAPI-LOGO-SOLID.png";
import PropTypes from "prop-types";
import "./Background.css";

const Background = ({ filmData }) => {
  let crawl;
  let title;
  let episode;
  let date;
  if (filmData) {
    crawl = filmData[0];
    title = filmData[1];
    episode = filmData[2];
    date = filmData[3];
  }
  return (
    <div>
      <section className="video-container">
        <video
          poster={backgroundVideo}
          className="stars-video"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={backgroundVideo} type="video/webm" />
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <section className="outer-swapi-container">
          <section className="swapi-container">
            <img className="swapi-title" src={logoHollow} />
          </section>
        </section>

        <div className="fade" />

        <section className="scroll-container">
          <div className="inner-scroll-box">
            <div className="title-box">
              <p>
                {filmData ? "Episode: " : ""} {episode}
              </p>
              <h1>
                {title}
              </h1>
            </div>

            <p>
              {filmData ? crawl : "API call failed"}
            </p>
            <p>
              {date}
            </p>
          </div>
        </section>
      </section>

      <audio className="background-audio" autoPlay loop>
        <source src={backgroundAudio} />
      </audio>
    </div>
  );
};

export default Background;
