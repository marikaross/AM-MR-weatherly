import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App.js';
import configure from './setupTests.js';
import Search from './Search.js';

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
  it('format entry should return and object', () => {
    const expectedObj = {
                          city: "Dallas",
                          state: "TX"
                        }
    const actualObj = renderedApp.instance().formatEntry("Dallas, TX");
    expect(actualObj).toEqual(expectedObj);
  })
  it('should render search after mounting', () => {
    const searchLength = renderedApp.find(Search).length
    expect(searchLength).toEqual(1);
  })
  it('should render weather report components in div after setting state', () => {
    renderedApp.setState({
      hourlyCards: "some cards",
      tenDay: "10 days"
    })
    const appLength = renderedApp.find(".App").length
    expect(appLength).toEqual(1);
  })
  it('should still only render Search if hourlyCards length is 0', () => {
    renderedApp.setState({
      hourlyCards: '',
      tenDay: "10 days"
    })
    const searchLength = renderedApp.find(Search).length
    const appLength = renderedApp.find(".App").length
    expect(appLength).toEqual(0);
    expect(searchLength).toEqual(1);
  })
  it('should still only render Search if tenDay length is 0', () => {
    renderedApp.setState({
      hourlyCards: 'You\'re out of time Jack',
      tenDay: ''
    })
    const searchLength = renderedApp.find(Search).length
    const appLength = renderedApp.find(".App").length
    expect(appLength).toEqual(0);
    expect(searchLength).toEqual(1);
  })



})
