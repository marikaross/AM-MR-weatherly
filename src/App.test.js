import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App.js';
import configure from './setupTests.js';

describe('App default state', () => {

  it('renders without crashing', () => {
    expect(true);
  });
  let renderedApp;
  beforeEach(() => {
    renderedApp = shallow(<App />)
  })
  
  it('should have a default state of 3 properties equal to empty arrays and an object', () => {
    const expectedState = [];
    const actualState = renderedApp.state("hourlyCards");
    expect(actualState).toEqual(expectedState);
  })

  it('state properties should have length after fetch',)



})
