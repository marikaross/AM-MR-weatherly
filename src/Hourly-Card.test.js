import React from 'react';
import { shallow } from 'enzyme';
import mockData from './mock-data.js'
import HourlyCard from './Hourly-Card.js'

describe ('HourlyCard', () => {
  let hourCard;
  beforeEach(() => {
    hourCard = shallow(<HourlyCard 
      hour='hour'
      condition='foggy' 
      icon='clouds' 
      projectedTemp='56'  />
    )
  })

  // it('should exist', () => {
  //   expect(HourlyCard).toBeDefined();
  // })

  it('should start with props', () =>{
    console.log(hourCard.debug())
  })
})