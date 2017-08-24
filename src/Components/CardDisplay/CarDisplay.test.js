import React from 'react';
import { shallow, mount } from 'enzyme';
import CardDisplay from './CardDisplay';
import Card from '../Card/Card';
import PeopleData from '../../Mock/MockPeople';

describe('Card Display', () => {
    let wrapper;
  
    const mockFn = jest.fn();
    const mockData = PeopleData;
    const favoriteCards = [];
    const favClicked = false;
  
    beforeEach( () => {
      wrapper = shallow(<CardDisplay 
      
        itemData={mockData}
        favorites={mockFn}
        favCards={favoriteCards}
        favClicked={favClicked}
        clickCard={mockFn}/>)
    })

    it('should exist', () => {
      expect(wrapper).toBeDefined();
    })
  
    it('should render 10 Cards', () => {      
      expect(wrapper.find('Card')).toBeDefined();
      expect(wrapper.find('Card').length).toEqual(10);
    })
  
    it('should pass through the correct props', () => {
      wrapper = mount(<CardDisplay 
          itemData={mockData}
          favorites={mockFn}
          favCards={favoriteCards}
          favClicked={favClicked}
          clickCard={mockFn}/>)

console.log(wrapper.props())
      expect(wrapper.props().itemData).toHaveProperty('homeworld', mockData.homeworld);
      expect(wrapper.props().itemData).toHaveProperty('planet', mockData.planet);
      expect(wrapper.props().itemData).toHaveProperty('population', mockData.population);
      expect(wrapper.props().itemData).toHaveProperty('name', mockData.name);
      expect(wrapper.props().itemData).toHaveProperty('species', mockData.species);
      // expect(wrapper.props().favClick).toBe(false);
      expect(wrapper.props().favCards).toEqual([]);
    })
  
  })