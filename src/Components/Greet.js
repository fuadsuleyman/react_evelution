// import React from 'react';
import './Greet.css';
import GreetDate from './GreetDate';
const Greet = (props) => {

return (
<div className="expense-item">

    <GreetDate date={props.date} />
    <h2 className="expense-item__description">{props.title}</h2>
    <div className="expense-item__price">${props.price}</div>
</div>)


}
export default Greet