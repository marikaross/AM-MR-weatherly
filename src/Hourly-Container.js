import React from 'react';
import HourlyCard from './Hourly-Card.js';
import cleaner from './data-cleaner.js';

export default function HourlyCardsContainer(props) {
  return (
    <div className="hourly-container">
      {
          props.hourlyData.map(hour => {
            return (
              <HourlyCard 
                hour={hour.hour} 
                condition={hour.condition} 
                projectedTemp={hour.temp} 
                icon={hour.icon} 
              />
            )
          }) 
        }
    </div>
  )
}

"if given array of 2, renders two hourly cards with props"
'renders card with correct amount of props'