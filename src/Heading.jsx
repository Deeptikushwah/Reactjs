import React from 'react';
import "./index.css";

function Heading()
{
    const date= new Date().toDateString();
    return   (
    <div className="expense-item">
    <div><p> date is {date}</p></div>
    <div><h2>car</h2>
    <div>$333.3</div>
</div>
</div>
     ) ;
}
export default Heading ;