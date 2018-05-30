import React from 'react';
import { shallow } from 'enzyme';
import HourlyContainer from './Hourly-Container.js';
import HourlyCard from './Hourly-Card.js';

describe('HourlyContainer', () => {
  it('should render the appropriate amount of cards', () => {
    const hourlyContainer = shallow(<HourlyContainer
                                    hourlyData={[{hour: "hammertime",
                                                condition: "not looking good",
                                                projectedTemp: "you on fire",
                                                icon: "mc hammer"}, 
                                                {hour: "hammertime",
                                                condition: "sun shower",
                                                projectedTemp: "you on fire",
                                                icon: "smiley face"}]} />)
    const actualCards = hourlyContainer.find(HourlyCard).length;
    const expectedCardLength = 2;
    expect(actualCards).toEqual(expectedCardLength)
  })
  it('should render the card with the correct props',() => {
    const hourlyContainer = shallow(<HourlyContainer
                                    hourlyData={[{hour: "hammertime",
                                                condition: "not looking good",
                                                temp: "you on fire",
                                                icon: "mc hammer"} 
                                                ]} />)
    const actualCardProps = hourlyContainer.find(HourlyCard).props()
    const expectedCardProps = {hour: "hammertime",
                              condition: "not looking good",
                              projectedTemp: "you on fire",
                              icon: "mc hammer"}
    expect(actualCardProps).toEqual(expectedCardProps)
  })
})