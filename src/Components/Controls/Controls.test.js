import React from "react";
import Controls from "./Controls";
import { shallow, mount, render } from "enzyme";

describe("Controls component", () => {
  let wrapper;
  let mockFn1 = jest.fn();
  let mockFn2 = jest.fn();
  let mockFn3 = jest.fn();

  let stateStub = {
    lightSpeed: "light-speed-container hide",
    yodaSpeed: "yoda-head",
    r2Speed: "r2",
    peopleButton: "button",
    planetButton: "button",
    vehicleButton: "button",
    favoriteButton: "button",
    beer: "beer",
    upperDash: "upper-dash-container",
    dashBoard: "controls-container",
    yodaBox: "yoda-box",
    glasses: "glasses"
  };

  beforeEach(() => {
    wrapper = shallow(
      <Controls
        selectCategory={mockFn1}
        clickBtn={mockFn2}
        favoriteCards={[]}
        favFunc={mockFn3}
      />
    );
  });

  it("should render 14 div elements", () => {
    expect(wrapper.find("div").length).toEqual(14);
  });

  it("should render 4 divs with a button class", () => {
    expect(wrapper.find("div.button").length).toEqual(4);
  });

  it("should render 9 sections with the correct classes", () => {
    expect(wrapper.find("section").length).toEqual(9);

    expect(wrapper.find("section.light-speed-container").length).toEqual(1);
    expect(wrapper.find("section.controls-container").length).toEqual(1);
    expect(wrapper.find("section.button-container").length).toEqual(1);
    expect(wrapper.find("section.boba-container").length).toEqual(1);
    expect(wrapper.find("section.screen1").length).toEqual(1);
    expect(wrapper.find("section.screen2").length).toEqual(1);
    expect(wrapper.find("section.favCount-container").length).toEqual(1);
    expect(wrapper.find("section.favCount").length).toEqual(1);
    expect(wrapper.find("section.counter").length).toEqual(1);
  });

  it("should render 4 videos with the correct classes", () => {
    expect(wrapper.find("video").length).toEqual(4);

    expect(wrapper.find("video.light-speed-video").length).toEqual(1);
    expect(wrapper.find("video.boba-video").length).toEqual(1);
    expect(wrapper.find("video.screen1-video").length).toEqual(1);
    expect(wrapper.find("video.screen2-video").length).toEqual(1);
  });

  it("should render an audio element with a class of r2-audio", () => {
    expect(wrapper.find("audio.r2-audio").length).toEqual(1);
  });

  it("should render seven image elements with the correct classes", () => {
    expect(wrapper.find("img").length).toEqual(7);

    expect(wrapper.find("img.upper-dash").length).toEqual(1);
    expect(wrapper.find("img.r2").length).toEqual(1);
    expect(wrapper.find("img.yoda-head").length).toEqual(1);
    expect(wrapper.find("img.yoda").length).toEqual(1);
    expect(wrapper.find("img.beer").length).toEqual(1);
    expect(wrapper.find("img.glasses").length).toEqual(1);
    expect(wrapper.find("img.dashboard").length).toEqual(1);
  });

  it("should render p tags with the correct classes", () => {
    expect(wrapper.find("p").length).toEqual(6);

    expect(wrapper.find("p.button-title").length).toEqual(4);
    expect(wrapper.find("p.favorite-counter").length).toEqual(1);
    expect(wrapper.find("p.counter-count").length).toEqual(1);
  });

  it("should have a state with 12 properties", () => {
    let stateKeys = Object.keys(wrapper.state());

    expect(stateKeys.length).toEqual(12);
  });

  it("should have the correct state properties with the correct default values", () => {
    let stateKeys = Object.keys(wrapper.state());

    expect(stateKeys.includes("lightSpeed")).toEqual(true);
    expect(wrapper.state().lightSpeed).toEqual("light-speed-container hide");

    expect(stateKeys.includes("yodaSpeed")).toEqual(true);
    expect(wrapper.state().yodaSpeed).toEqual("yoda-head");

    expect(stateKeys.includes("r2Speed")).toEqual(true);
    expect(wrapper.state().r2Speed).toEqual("r2");

    expect(stateKeys.includes("peopleButton")).toEqual(true);
    expect(wrapper.state().peopleButton).toEqual("button");

    expect(stateKeys.includes("planetButton")).toEqual(true);
    expect(wrapper.state().planetButton).toEqual("button");

    expect(stateKeys.includes("vehicleButton")).toEqual(true);
    expect(wrapper.state().vehicleButton).toEqual("button");

    expect(stateKeys.includes("favoriteButton")).toEqual(true);
    expect(wrapper.state().favoriteButton).toEqual("button");

    expect(stateKeys.includes("beer")).toEqual(true);
    expect(wrapper.state().beer).toEqual("beer");

    expect(stateKeys.includes("upperDash")).toEqual(true);
    expect(wrapper.state().upperDash).toEqual("upper-dash-container");

    expect(stateKeys.includes("dashBoard")).toEqual(true);
    expect(wrapper.state().dashBoard).toEqual("controls-container");

    expect(stateKeys.includes("yodaBox")).toEqual(true);
    expect(wrapper.state().yodaBox).toEqual("yoda-box");

    expect(stateKeys.includes("glasses")).toEqual(true);
    expect(wrapper.state().glasses).toEqual("glasses");
  });
});
