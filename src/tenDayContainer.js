import React from 'react';
import TenDayCard from './Ten-Day-Card';
import cleaner from './data-cleaner.js';


export default function TenDayContainer(props) {
  return (
      <div className="tenDayContainer">
        {
          cleaner.get10Day().map(day => {
            return (
              <TenDayCard 
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
