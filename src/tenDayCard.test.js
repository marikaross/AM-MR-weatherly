import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDayCard from './Ten-Day-Card.js';

describe('TenDayCard', () => {
  let dayCard;
  beforeEach(() => {
    dayCard = shallow(<TenDayCard
      weekday='Perpetual Monday'
      statusPic='blackhole' 
      high='0' 
      low='0 kelvins'  />
    )
  })

  it('should render with expected html tags', () =>{

    const actualStructureLength = dayCard.find("h3").length;
    const expectedStructureLength = 3;
    expect(actualStructureLength).toEqual(expectedStructureLength)
  })
})