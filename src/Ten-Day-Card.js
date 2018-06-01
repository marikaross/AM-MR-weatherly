import React from 'react';

const TenDayCard = props => {

  return (
    <div className="tenDayCard">
      <h3>{props.weekday}</h3>
      <img src={props.statusPic} />
      <h3>{props.high}</h3>
      <h3>{props.low}</h3>
    </div>
    )
}

export default TenDayCard;