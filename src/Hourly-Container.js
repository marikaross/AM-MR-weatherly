import React from 'react';
import HourlyCard from './Hourly-Card.js';

export default function HourlyCardsContainer(props) {
  return (
    <div>{
      props.HourlyCards.map((hourlyCard, index) => {
        return <HourlyCard hour={hourlyCard} key={index} />
      })
    }
    </div>
  )
}