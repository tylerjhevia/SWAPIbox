import React from "react";
import Background from "./Background";
import { shallow, mount, render } from "enzyme";

import MockFilmData from "./MockFilmData";

describe("Background", () => {
  let wrapper;
  const mockFilmData = MockFilmData;

  beforeEach(() => {
    wrapper = shallow(<Background filmData={mockFilmData} />);
  });

  it("should receive a prop of filmData from the App component", () => {
    expect(wrapper.unrendered.props.filmData).toBeDefined();
  });

  it("should receive the correct filmData from the App component", () => {
    expect(wrapper.unrendered.props.filmData).toEqual(mockFilmData);
  });

  it("should render 4 div elements", () => {
    expect(wrapper.find("div").length);
  });

  it("should render a video with a class of stars-video ", () => {
    expect(wrapper.find("video.stars-video").length).toEqual(1);
  });

  it("should render 4 section elements with the correct classes", () => {
    expect(wrapper.find("section.video-container").length).toEqual(1);
    expect(wrapper.find("section.outer-swapi-container").length).toEqual(1);
    expect(wrapper.find("section.swapi-container").length).toEqual(1);
    expect(wrapper.find("section.scroll-container").length).toEqual(1);
  });

  it("should render an img with a class of swapi-title", () => {
    expect(wrapper.find("img.swapi-title").length).toEqual(1);
  });

  it("should render an audio element with a class of background-audio", () => {
    expect(wrapper.find("audio.background-audio"));
  });

  it("should render three p elements", () => {
    expect(wrapper.find("p").length).toEqual(3);
  });

  it("should render an h1 element", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });
});
