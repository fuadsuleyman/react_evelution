// import React from 'react';
import './Greet.css';

const Greet = () => {

const date = new Date(2021, 9, 15);
const description = "Car Inshurance";
const price = 294.67;

return (
<div className="expense-item">
    <div >{date.toISOString()}</div>
    <h2 className="expense-item__description">{description}</h2>
    <div className="expense-item__price">${price}</div>
</div>)


}
export default Greet