import { shallow } from 'enzyme';
import data from './mock-data.js';
import cleaner from './data-cleaner.js';

describe('describe methods of data cleaner', () => {
  it('getCurrentdata should take in data as argument and return object', () => {
    const expectedObj = { location: 'Louisville, KY',
                          currentCondition: 'Partly Cloudy',
                          day: 'Wednesday',
                          temp: 46,
                          high: '51',
                          low: '32',
                          summary: 'Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.',
                          icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
                          }
    const actualObj = cleaner.getCurrentData(data);
    expect(actualObj).toEqual(expectedObj);
  })
  it('get10Day should take data as argument and return an array of objects with length of 10', () => {
    const expectedArray = 
    [ { weekday: 'Wednesday',
    statusPic: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
    high: '51',
    low: '32' },
  { weekday: 'Thursday',
    statusPic: 'http://icons.wxug.com/i/c/k/clear.gif',
    high: '55',
    low: '51' },
  { weekday: 'Friday',
    statusPic: 'http://icons.wxug.com/i/c/k/chancerain.gif',
    high: '57',
    low: '44' },
  { weekday: 'Saturday',
    statusPic: 'http://icons.wxug.com/i/c/k/rain.gif',
    high: '47',
    low: '30' },
  { weekday: 'Sunday',
    statusPic: 'http://icons.wxug.com/i/c/k/cloudy.gif',
    high: '37',
    low: '22' },
  { weekday: 'Monday',
    statusPic: 'http://icons.wxug.com/i/c/k/clear.gif',
    high: '35',
    low: '19' },
  { weekday: 'Tuesday',
    statusPic: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
    high: '32',
    low: '20' },
  { weekday: 'Wednesday',
    statusPic: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
    high: '33',
    low: '26' },
  { weekday: 'Thursday',
    statusPic: 'http://icons.wxug.com/i/c/k/snow.gif',
    high: '35',
    low: '23' },
  { weekday: 'Friday',
    statusPic: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
    high: '31',
    low: '18' } ];
    const actualArray = cleaner.get10Day([...data.forecast.simpleforecast.forecastday]);
    expect(actualArray).toEqual(expectedArray);
  })
  it('fillHourlyCards should take data as argument and return an array of objects with length of 7', () => {
    const expectedArray = [ { hour: '12',
    condition: 'Partly Cloudy',
    icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
    temp: '47' },
  { hour: '13',
    condition: 'Partly Cloudy',
    icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
    temp: '49' },
  { hour: '14',
    condition: 'Partly Cloudy',
    icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
    temp: '49' },
  { hour: '15',
    condition: 'Clear',
    icon: 'http://icons.wxug.com/i/c/k/clear.gif',
    temp: '51' },
  { hour: '16',
    condition: 'Clear',
    icon: 'http://icons.wxug.com/i/c/k/clear.gif',
    temp: '50' },
  { hour: '17',
    condition: 'Clear',
    icon: 'http://icons.wxug.com/i/c/k/clear.gif',
    temp: '48' },
  { hour: '18',
    condition: 'Clear',
    icon: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
    temp: '45' },
  { hour: '19',
    condition: 'Clear',
    icon: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
    temp: '43' } ];
    const actualArray = cleaner.fillHourlyCards([...data.hourly_forecast]);
    expect(actualArray).toEqual(expectedArray);
  })
})