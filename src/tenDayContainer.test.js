import React from 'react';
import { shallow } from 'enzyme';
import tenDayContainer from './tenDayContainer.js';
import tenDayCard from './Ten-Day-Card.js';

describe.only('ten day container', () => {
  it('should render the appropriate amount of cards', () => {
    const tenDayContainer = shallow(<tenDayContainer
                                    tenDayData={[{weekday: "hammertime",
                                                statusPic: "not looking good",
                                                high: "you on fire",
                                                low: "ice cold"}, 
                                                {weekday: "hammertime",
                                                statusPic: "not looking good",
                                                high: "you on fire",
                                                low: "ice cold"}]} />)
    
    const actualCardLength = tenDayContainer.find(tenDayCard).length;
    console.log(tenDayContainer.debug())
    const expectedCardLength = 2;
    expect(actualCardLength).toEqual(expectedCardLength);
  })
})