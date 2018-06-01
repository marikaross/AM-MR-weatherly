import React from 'react';
import { shallow } from 'enzyme';
import TenDayContainer from './TenDayContainer.js';
import Card from './Card.js';

describe('ten day container', () => {
  it('should render the appropriate amount of cards', () => {
    const wrapper = shallow(<TenDayContainer
                                    tenDayData={[{weekday: "hammertime",
                                                statusPic: "not looking good",
                                                high: "you on fire",
                                                low: "ice cold"}, 
                                                {weekday: "hammertime",
                                                statusPic: "not looking good",
                                                high: "you on fire",
                                                low: "ice cold"}]} />)
    
    console.log(wrapper.debug())
    const actualCardLength = wrapper.find(Card).length;
    const expectedCardLength = 2;
    expect(actualCardLength).toEqual(expectedCardLength);
  })
  it('should render the card with the correct props',() => {
    const wrapper = shallow(<TenDayContainer
                                    tenDayData={[{weekday: "hammertime",
                                                statusPic: "not looking good",
                                                high: "you on fire",
                                                low: "mc hammer"} 
                                                ]} />)
    const actualCardProps = wrapper.find(Card).props()
    const expectedCardProps = {weekday: "hammertime",
                              statusPic: "not looking good",
                              high: "you on fire",
                              low: "mc hammer"}
    expect(actualCardProps).toEqual(expectedCardProps)
  })
})