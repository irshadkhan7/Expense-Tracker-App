import React from 'react'
import img1 from "../images/pic-1.png"
import img2 from "../images/pic-2.png"
import img3 from "../images/pic-3.svg"


import '../style/expense.css'

function Expense({income, expense}) {
  return (
<>
<div className='heading-name'><h2>Hi' Irshad Ali</h2></div>
<div className='calculate-box'>
<div className='box-1'>
       <h1> Total Income </h1>
        <div  className='amount'>₹{income}</div>
        <img src={img1} alt="pic"  />
    </div>
{/* <div> */}
<div className='box-1'>
        <h1> Total Expense</h1>
        <div className='amount'>₹{expense}</div>
        <img src={img2} alt='error'  />
    </div>
    <div className='box-1'>
    <h1>Remaning Blance</h1>
    <div  className='amount'>₹{income - expense}</div>
    <img src={img3} alt='error'  />
    </div>
</div>
</>
)
}
export default Expense