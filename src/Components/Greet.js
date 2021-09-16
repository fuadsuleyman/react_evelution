// import React from 'react';
import './Greet.css';

const Greet = (props) => {

// const date = new Date(2021, 9, 15);
// const description = "Car Inshurance";
// const price = 294.67;

return (
<div className="expense-item">
    <div >{props.date.toISOString()}</div>
    <h2 className="expense-item__description">{props.title}</h2>
    <div className="expense-item__price">${props.price}</div>
</div>)


}
export default Greet