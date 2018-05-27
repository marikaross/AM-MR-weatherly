import React from 'react';
import { shallow } from 'enzyme';
import mockData from './mock-data.js'
import HourlyCard from './Hourly-Card.js'

describe ('HourlyCard', () {
  let HourlyCard;

  beforeEach(() => {
    HourlyCard = shallow(<HourlyCard /> )
  })

  it('should exist', () => {
    expect(HourlyCard).toBeDefined();
  })

  it('should start with props', =>{
    expect(HourlyCard)instance()
  })
})