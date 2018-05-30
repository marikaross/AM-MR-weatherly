import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js';

describe ('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( <Card 
                    city='Leadville'
                    condition='super high'
                    currentTemp='too hot'
                    high='so high'
                    low='so low'
                    summary='a city of extremes'
                    />)
  })

  it('should render with expected HTML tags', () => {
    const actualCardLength = wrapper.find('h3').length;
    const expectedCardLength = 4;
    expect(actualCardLength).toEqual(expectedCardLength);
  })
})