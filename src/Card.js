import React from 'react';

const Card = props => {
    const hourCard = 

      <div className="hourlyCard">
        <h3>{props.hour}</h3>
        <h5>{props.condition}</h5>
        <h3><img src={props.icon}/></h3>
        <h2>{props.projectedTemp}&#8457;</h2>
      </div>
      
      const dayCard =
    <div className="tenDayCard">
      <h3>{props.weekday}</h3>
      <img src={props.statusPic} />
      <h3>{props.high}</h3>
      <h3>{props.low}</h3>
    </div>
     

     return props.hour  ? hourCard : dayCard 
     
}



export default Card;