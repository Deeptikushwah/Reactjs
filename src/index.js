
import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
import "./index.css"


const name="deepti kushwah";
const currDate= new Date().toLocaleDateString();
const currTime= new Date().toLocaleTimeString();
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/200/300";
const img3="https://picsum.photos/200/300";
ReactDOM.render(
  <>
<Heading/>
<Heading/>
<Heading/>
<h1 contentEditable="true"> {name}</h1>
<h1 className="heading">my name is {name}</h1>
<h5>{2*6+7+9}</h5>
<p>my world</p>
<p>current date is = {currDate}</p>
<p>current Time is = {currTime}</p>
<div id="img_div">
<img src={img1} alt="random" />
<img src={img2} alt="random" />
<img src={img3} alt="random" />
</div>
<ol>
  <li>deepti</li>
  <li>deepti kushwah</li>
  <li>deepti name</li>
</ol>


<div classNmae="cards">
<div classNmae="card">
  <img src ="" alt="img" className="card_img "/>
  <div className="card_info"></div>
  <span className="car_category"> Anetflix Original series</span>
  <h3 className="card_title"></h3>
  <a href="" target="_blank"/>
  <button>watch now</button>

</div>

</div>


</>,
document.getElementById('root')

);