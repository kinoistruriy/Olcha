import React from 'react'
import './Carusel.css'
import {Row,Col} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moment from 'moment'
export default function Carusel() {
  return (
    <div className='Carusel' style={{padding:'0 24px'}}>
        <Row>
            <Col lg={8} xl={9}  style={{height:450}}>
            <Carousel variant="dark" style={{height:450}} indicators={false}>
                {/* 1 */}
                <Carousel.Item>
        <img
          className="d-block  w-100"
          src="https://olcha.uz/image/original/sliders/uz/AzvwcBvHwxXi07DUXEHQmY9c9ajaPsDCpsTX3wir108OOXqrhrwDn1bj69zx.png "
          alt="First slide"
          style={{height:450,borderRadius:'15px'}}
        />
      </Carousel.Item>
{/* 2 */}
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src="https://olcha.uz/image/original/sliders/ru/haCVKAUd0TLuDnNbdn205xVOluYDCwUOW7sZTFSxDdJBzmK26txMfWuO9IJc.png "
          alt="First slide"
          style={{height:450,borderRadius:'15px'}}
        />
      </Carousel.Item>
      {/* 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://olcha.uz/image/original/sliders/uz/HNEXbh6IcbSGardB4tc3Rr4nTDKrosCzLgsAzoVYsvkT4JxiqEQw46RdnrBU.png"
          alt="Second slide"
          style={{height:450,borderRadius:'15px'}}
        />
      </Carousel.Item>
      {/* 4 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://olcha.uz/image/original/sliders/uz/wDTj1CDDbiQQgr1SlBmn2jyOMwueb10s5TLF36MLcSZW6hHDuFVnAJtqfiHK.png"
          alt="Second slide"
          style={{height:450,borderRadius:'15px'}}
        />
      </Carousel.Item>
      {/* 4 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://olcha.uz/image/original/sliders/uz/qyZm90yM7kejNkMeMYyTVgvLD40rwYXgsE0eyCU0QcAqnkYYw9M47W31dmIP.png"
          alt="Third slide"
          style={{height:450,borderRadius:'15px'}}
        />

      </Carousel.Item>
      {/* 4 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://olcha.uz/image/original/sliders/uz/Y8fRfEeajewJY7XNNpnZsBhimbIq1g4VSwVRui71bXOtvnPU7VLnbfcydq3S.png"
          alt="Third slide"
          style={{height:450,borderRadius:'15px'}}
        />
      </Carousel.Item>
    </Carousel>




            </Col>
            <Col xl={3} lg={4} style={{height:450}}>
            <Card style={{ width:'380px', height:450,borderRadius:'12px',padding:'15px', border:'4px solid red',borderRadius:'15px' }}>
                <div className='TopCard-box' style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <h4>Kun mahsuloti</h4>
                    {moment().format('MMMM Do YYYY, h:mm:ss a')}
                </div>
            <Carousel variant="dark" style={{height:450}} indicators={false} controls={true}>
                {/* 1 */}
      <Carousel.Item>
        <img
          className="d-block  w-70"
          src="https://olcha.uz/image/220x220/products/2020-02-17/artel-ua43h3401-android-tv-12123-0.jpeg"
          alt="First slide"
          style={{height:200 ,borderRadius:'12px', margin:'0 70px'}}
        />
        <p><a href="" style={{textDecoration:'none',color:'black',fontSize:'22px'}}>Televizor Artel UA43H3401 Android TV</a></p>
        <span style={{fontSize:'23px',color:'red',fontWeight:600}}>3 330 000 so'm <span style={{color:'gray',textDecoration:'line-through'}}>3 840 000 so'm</span></span>
        <br/>
        <button type="" className='slide-btn'>360 000 so'm x12 oy</button>
      </Carousel.Item>
      {/* 2 */}
      <Carousel.Item>
        <img
          className="d-block w-70"
          src="https://olcha.uz/image/220x220/products/2022-09-17/vodonepronitsaemaya-sumka-dlya-smartfona-bolice-119634-0.jpeg"
          alt="Second slide"
          style={{height:200,borderRadius:'12px' ,margin:'0 70px'}}
        />
        <p><a href="" style={{textDecoration:'none',color:'black',fontSize:'22px'}}>Suv o‘tkazmaydigan smartfon sumkasi Bolice </a></p>
        <span style={{fontSize:'23px',color:'red',fontWeight:600}}>80 000 so'm <span style={{color:'gray',textDecoration:'line-through'}}>80 000 so'm</span></span>
        <br/>
        <button type="" className='slide-btn'>11 000 so'm x12 oy</button>
      </Carousel.Item>
      {/* 3 */}
      <Carousel.Item>
        <img
          className="d-block w-70"
          src="https://olcha.uz/image/220x220/products/2022-12-04/stolovyy-nabor-simp-field-flower-46-predmetov-173156-0.jpeg"
          alt="Third slide"
          style={{height:200,borderRadius:'12px',margin:'0 70px'}}
        />
<p><a href="" style={{textDecoration:'none',color:'black',fontSize:'22px'}}>Stol idishlar to‘plami Simp Field Flower 46 ta element </a></p>
        <span style={{fontSize:'23px',color:'red',fontWeight:600}}>955 000 so'm <span style={{color:'gray',textDecoration:'line-through'}}>3 840 000 so'm</span></span>
        <br/>
        <button type="" className='slide-btn'>129 000 so'm x12 oy</button>
      </Carousel.Item>
    </Carousel>  
    </Card>
            </Col>
        </Row>
    </div>
  )
}
