import React from 'react'
import './Navbar.css'
import ResponNav from './ResponNav'
import { Button } from 'react-bootstrap'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiSearch} from 'react-icons/fi'
import {IoIosStats} from 'react-icons/io'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsCart2,BsPerson} from 'react-icons/bs';
import { useTranslation, Trans } from 'react-i18next';
export default function Navbar() {
  const { t, i18n } = useTranslation();
  return (<>
  <ResponNav/>
    <div className='Navbar'>
    <a href="#"><img src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt=""/></a>
        <Button variant='outline-light' size="lg"  id='right-button'><GiHamburgerMenu/>{t('navbar.part1')}</Button>
        {/* input box */}
        <div className='Search-box'>
            <form>
                <input type='text' placeholder='' />
                <button id='Search-btn'> <FiSearch/> </button>
            </form>
        </div>
        {/* input box */}
    
    <div className='Navbar-right'>
      {/* icon box */}
      <div className='right-boxs'>
        <IoIosStats style={{width:'35px', height:'35px',margin:'8px 0 0 0' }}/>
        <p>{t('navbar.part2')}</p>
      </div>
      <div className='right-boxs'>
        <AiOutlineHeart style={{width:'35px', height:'35px',margin:'8px 0 0 0'}}/>
        <p>{t('navbar.part3')}</p>
      </div>
      <div className='right-boxs'>
        <BsCart2 style={{width:'35px', height:'35px',margin:'8px 0 0 0'}}/>
        <p>{t('navbar.part4')}</p>
      </div>
      <div className='right-boxs'>
        <BsPerson style={{width:'35px', height:'35px',margin:'8px 0 0 0'}}/>
        <p>{t('navbar.part5')}</p>
      </div>
      {/* icon box */}
    </div>
    </div>
    </>)
}
