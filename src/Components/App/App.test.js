import React from "react";
import App from "./App";
import { shallow, mount, render } from "enzyme";
import fetchMock from "fetch-mock";
import MockVehicleData from "./MockVehicleData";
import MockPeopleData from "./MockPeopleData";
import MockPlanetData from "./MockPlanetData";

describe("App", () => {
  let wrapper;
  const stateStub = {
    planetData: null,
    peopleData: null,
    vehicleData: null,
    filmData: null,
    favoriteCards: [],
    itemData: null,
    favClicked: false
  };
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  const mockVehicleData = MockVehicleData;
  const mockPeopleData = MockPeopleData;
  const mockPlanetData = MockPlanetData;

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a Background component", () => {
    expect(wrapper.find("Background").length).toEqual(1);
  });

  it("should pass a filmData prop to the Background component", () => {
    let backgroundProps = Object.keys(wrapper.find("Background").node.props);

    expect(backgroundProps.includes("filmData")).toEqual(true);
  });

  it("should render a Controls component", () => {
    expect(wrapper.find("Controls").length).toEqual(1);
  });

  it("should pass selectCategory, clickBtn, favoriteCards, and favFunc props to the Controls component", () => {
    let controlsProps = Object.keys(wrapper.find("Controls").node.props);

    expect(controlsProps.includes("selectCategory")).toEqual(true);
    expect(controlsProps.includes("clickBtn")).toEqual(true);
    expect(controlsProps.includes("favoriteCards")).toEqual(true);
    expect(controlsProps.includes("favFunc")).toEqual(true);
  });

  it("should render a CardDisplay component", () => {
    expect(wrapper.find("CardDisplay").length).toEqual(1);
  });

  it("should pass itemData, favorites, favCards, favClicked, and clickCard props to CardDisplay component", () => {
    let cdProps = Object.keys(wrapper.find("CardDisplay").node.props);
    expect(cdProps.includes("itemData")).toEqual(true);
    expect(cdProps.includes("favorites")).toEqual(true);
    expect(cdProps.includes("favCards")).toEqual(true);
    expect(cdProps.includes("favClicked")).toEqual(true);
    expect(cdProps.includes("clickCard")).toEqual(true);
  });

  it("should have a state with properties of planetData, peopleData, vehicleData, filmData, favoriteCards, itemData, and favClicked", () => {
    let stateKeys = Object.keys(wrapper.state());

    expect(stateKeys.length).toEqual(8);
    expect(stateKeys.includes("planetData")).toEqual(true);
    expect(stateKeys.includes("peopleData")).toEqual(true);
    expect(stateKeys.includes("vehicleData")).toEqual(true);
    expect(stateKeys.includes("filmData")).toEqual(true);
    expect(stateKeys.includes("favoriteCards")).toEqual(true);
    expect(stateKeys.includes("itemData")).toEqual(true);
    expect(stateKeys.includes("favClicked")).toEqual(true);
    expect(stateKeys.includes("api")).toEqual(true);
  });

  it("should have the correct default state values", () => {
    let stateProps = wrapper.state();

    expect(stateProps.planetData).toEqual(null);
    expect(stateProps.peopleData).toEqual(null);
    expect(stateProps.vehicleData).toEqual(null);
    expect(stateProps.filmData).toEqual(null);
    expect(stateProps.favoriteCards).toEqual([]);
    expect(stateProps.itemData).toEqual(null);
    expect(stateProps.favClicked).toEqual(false);
  });

  it.skip(
    "should have an updated vehicleData state after making API calls",
    () => {
      fetchMock.get("https://swapi.co/api/vehicles/", {
        status: 200
      });
      const wrapper = shallow(<App />);

      expect(wrapper.state().vehicleData).toEqual(mockVehicleData);
    }
  );

  it.skip(
    "should have an updated peopleData state after making API calls",
    () => {
      fetchMock.get("https://swapi.co/api/people/", {
        status: 200
      });
      const wrapper = shallow(<App />);

      expect(wrapper.state().peopleData).toEqual(mockPeopleData);
    }
  );

  it.skip(
    "should have an updated planetData state after making API calls",
    () => {
      fetchMock.get("https://swapi.co/api/planets/", {
        status: 200
      });
      const wrapper = shallow(<App />);

      expect(wrapper.state().planetData).toEqual(mockPlanetData);
    }
  );
});
