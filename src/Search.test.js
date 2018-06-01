import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from './search.js';

describe ('Search tests', () => {
  describe('Search default state tests', () => {
    test('Search should have a default state of userInput and the value is an empty string', () => {
      const expectedUserInput = '';
      const renderedSearch = shallow(<Search />);
      const actualUserInput = renderedSearch.state('userInput');
      expect(actualUserInput).toEqual(expectedUserInput);
    });
  })

    it('When Search\'s getInput function is invoked that the userInput is updated', () => {
      const expectedUserInput = 'some input';
      const renderedSearch = shallow(<Search />);
      const mockEvent = {target: {value: 'some input', name: 'userInput'}};
      renderedSearch.instance().getInput(mockEvent);
      const actualUserInput = renderedSearch.state('userInput');
      expect(actualUserInput).toEqual(expectedUserInput);
    });

    // test('when Search onClick function is invoked that is it invoked with the correct arguments', () => {
    //   const expectedArguments = expect.objectContaining(
    //                                         { userInput: 'some input' });
    //   const mockonClick = jest.fn();
    //   const mockEvent = { preventDefault: jest.fn() };
    //   const renderedSearch = (<Search onClick = { onClick } />);
    //   renderedSearch.setState({ userInput: 'some input'});

    //   renderedSearch.instance().onCLick(mockEvent);
    //   expect(mockonClick).toHaveBeenCalledWith(expectedArguments);
    // });
  })
