import React from 'react';
import { shallow } from 'enzyme';
import mockData from './mock-data.js';
import HourlyCard from './Hourly-Card.js';

describe.only('HourlyCard', () => {
  let hourCard;
  beforeEach(() => {
    hourCard = shallow(<HourlyCard 
      hour='hour'
      condition='foggy' 
      icon='clouds' 
      projectedTemp='56'  />
    )
  })
  it('should render with expected html tags', () =>{
    const actualStructureLength = hourCard.find("h3").length;
    const expectedStructureLength = 2;
    expect(actualStructureLength).toEqual(expectedStructureLength)
  })
})


