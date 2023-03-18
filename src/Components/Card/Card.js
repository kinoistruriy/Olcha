import React from 'react'
import './Card.css'
import {BsCart2} from 'react-icons/bs'
export default function Card({img,text,cost,btn}) {
  return (
    <div className='Card'>
        <img id='img' src={img} alt="card-img"/>
        <p> {text}</p>
        <br/>
        <h4>{cost}</h4>
        <button className='btn-card' type="">{btn}x 12 oy</button>
        <div className='Bottom-btn'>
          <button id='cart-btn'><BsCart2/></button>
          <button id='card-btn-bottom'>Muddatli to'lov</button>
        </div>
    </div>
  )
}

