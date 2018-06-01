import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeather from './CurrentWeather.js';

describe ('CurrentWeather', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( <CurrentWeather 
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