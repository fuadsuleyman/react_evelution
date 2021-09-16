// import React from 'react';
import './Greet.css';
import GreetDate from './GreetDate';
import Card from '../UI/Card';
const Greet = (props) => {

return (
<Card className="expense-item">

    <GreetDate date={props.date} />
    <h2 className="expense-item__description">{props.title}</h2>
    <div className="expense-item__price">${props.price}</div>
</Card>)


}
export default Greet