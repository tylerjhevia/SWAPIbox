import React from "react";
import Card from "./Card";
import react from "react";
import { shallow, mount, render } from "enzyme";
import fetchMock from "fetch-mock";

describe("Card", () => {
  it.skip("should render a div", () => {
    let wrapper = shallow(<Card />);

    console.log(wrapper.debug());
  });
});
