import React from 'react'
import './Offer.css'

export default function Offer() {
  return (<>
    <div className='Offer-container'>
        <div className='top-box'>
            {/* D-felx sale-box */}
        <div class="parent">
            <div class="child bg-offer-one"></div>
          </div>    
          <div class="parent">
            <div class="child bg-offer-two"></div>
          </div> 
          <div class="parent">
            <div class="child bg-offer-three"></div>
          </div> 
        {/* d-flex box enf */}
        </div>

        <div className='bottom-box-offer'>
        <div class="bottom-child-offer">
        <div class="child bg-offer-one-bottom"></div>
          </div> 
          <div class="bottom-child-offer">
        <div class="child bg-offer-two-bottom"></div>
          </div> 
        </div>


    </div>
    </> )
}
