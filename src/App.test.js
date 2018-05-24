import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App.js';
import configure from './setupTests.js';

describe('App default state', () => {
  let renderedApp;
  beforeEach(() => {
    renderedApp = shallow(<App />)
  })
  it('should have a default state of weatherInfo equal to empty array', () => {
    const expectedState = [];
    const actualState = renderedApp.state('weatherInfo');
    expect(actualState).toEqual(expectedState);
  })
})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
