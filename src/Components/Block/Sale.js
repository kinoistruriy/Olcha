import React from 'react'
import './Sale.css'

export default function Sale() {
  return (<>
    <div className='sale-block'>
        <div className='top-box'>
        {/* D-felx sale-box */}
        <div class="parent">
            <div class="child bg-one"></div>
          </div>    
          <div class="parent">
            <div class="child bg-two"></div>
          </div> 
          <div class="parent">
            <div class="child bg-three"></div>
          </div> 
        {/* d-flex box enf */}       
        </div>

        <div className='bottom-box-sale'>
        <div class="bottom-child-sale">
            <div class="child bg-bottom-box"></div>
          </div> 
        </div>
    </div>
    </>)
}
