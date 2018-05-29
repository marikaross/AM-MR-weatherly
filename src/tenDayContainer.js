import React from 'react';
import cleaner from 'data-cleaner.js';

export default function tenDayContainer(props) {
  return (
    <div className="hourly-container">
      {props.children}
     
          {/*cleaner.get10Day(data).map(day => {
            return <Card city={day.weekday} condition={day.statusPic} high={day.high} low={day.low} />
          })
      */}
    </div>
  )
}
