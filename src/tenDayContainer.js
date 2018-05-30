import React from 'react';
import tenDayCard from './tenDayCard';
import cleaner from './data-cleaner.js';


export default function tenDayContainer(props) {
  return (
      <div className="tenDayContainer">
        {
          cleaner.get10Day().map(day => {
            return (
              <Card 
                city={day.weekday} 
                condition={day.statusPic} 
                high={day.high} 
                low={day.low} 
                />
                )
              })
        }
      </div
    )
}
