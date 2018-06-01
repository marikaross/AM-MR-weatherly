import React from 'react';
import Card from './Card.js';
import cleaner from './data-cleaner.js';


export default function TenDayContainer(props) {
  return (
      <div className="tenDayContainer">
        {
          props.tenDayData.map(day => {
            return (
              <Card 
                weekday={day.weekday} 
                statusPic={day.statusPic} 
                high={day.high} 
                low={day.low} 
                />
                )
              })
        }
      </div>
    )
}
