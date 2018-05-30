import React from 'react';

const HourlyCard = props => {

    return(
      <div className="hourlyCard">
        <h3>{props.hour}</h3>
        <h5>{props.condition}</h5>
        <h3><img src={props.icon}/></h3>
        <h2>{props.projectedTemp}&#8457;</h2>
      </div>
      )
  
}



export default HourlyCard;