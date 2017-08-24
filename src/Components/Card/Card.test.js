
import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Card/Card';
import MockData from '../../Mock/MockData';

describe('Card', () => {
    let wrapper;
    const mockFn = jest.fn();
    const mockFn2 = jest.fn()
    const mockData = MockData
  
    beforeEach( () => {
      wrapper = shallow(<Card 
        key={1}
        itemData={mockData}
        favorites={mockFn}
        clickCard={mockFn}
        className={"card"}/>)
    });
  
    it('should exist', () => {
      expect(wrapper).toBeDefined();
    });
  
    it('should render h3 with a class name of card-name', () => {
      expect(wrapper.find('h3.card-name').length).toEqual(1);
    });
  
    it('should render p with a class name of species', () => {
      expect(wrapper.find('p.species').length).toEqual(1);
    });
  
    it('should render p with a class name of homeworld', () => {
      expect(wrapper.find('p.homeworld').length).toEqual(1);
    });
  
    it('should render p with a class name of population', () => {
        expect(wrapper.find('p.population').length).toEqual(1);
      });
      
    it('should render div with a class name of card-video-container', () => {
    expect(wrapper.find('div.card-video-container').length).toEqual(1);
    });
    
    it('should render an audio clip', () => {
    expect(wrapper.find('audio').length).toEqual(1);
    });
  
    it('should render the correct name', () => {
      const name = mockData.name;
      expect(wrapper.find('h3.card-name').text()).toEqual(name);
    });
  
    it('should pass through the correct props', () => {
      wrapper = mount(<Card 
        key={1}
        itemData={mockData}
        favorites={mockFn}
        clickCard={mockFn}
        className={"card"} />);

    expect(wrapper.props().itemData).toHaveProperty('homeworld', mockData.homeworld);
    expect(wrapper.props().itemData).toHaveProperty('planet', mockData.planet);
    expect(wrapper.props().itemData).toHaveProperty('population', mockData.population);
    expect(wrapper.props().itemData).toHaveProperty('name', mockData.name);
    expect(wrapper.props().itemData).toHaveProperty('species', mockData.species);
    });

    it('should fire 2 functions when card is clicked', () => {
        wrapper = mount(<Card 
            key={1}
            itemData={mockData}
            favorites={mockFn2}
            clickCard={mockFn}
            className={"card"} />);
        const card = wrapper.find('.card');

        wrapper.instance().clickCard = mockFn
        wrapper.instance().favorites = mockFn2
    
        expect(mockFn).toHaveBeenCalledTimes(0);
    
        wrapper.update();

        card.simulate('click');

        expect(wrapper.instance().clickCard).toHaveBeenCalledTimes(1);
        expect(wrapper.instance().favorites).toHaveBeenCalledTimes(1);
        
    })
  
  })


