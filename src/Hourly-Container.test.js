import React from 'react';
import { shallow } from 'enzyme';
import HourlyContainer from './Hourly-Container.js';

describe('HourlyContainer', () => {
  it('should render the appropriate amount of cards', () => {
    const hourlyContainer = shallow(<HourlyContainer
                                     />)
  })
})