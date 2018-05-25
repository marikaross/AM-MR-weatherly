import React from 'react';
import HourlyCard from './Hourly-Card.js';

export default function HourlyCardsContainer(props) {
  return (
    <div className="hourly-container">
      {props.children}
    </div>
  )
}

// props.questions.map((question, index) => {
//           return <Question question={question} key={index} />
//         })