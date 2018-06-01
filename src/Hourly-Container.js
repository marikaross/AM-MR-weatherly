import React from 'react';
import Card from './Card.js';
import cleaner from './data-cleaner.js';

export default function HourlyCardsContainer(props) {
  return (
    <div className="hourly-container">
      {
          props.hourlyData.map(hour => {
            return (
              <Card 
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