import React from 'react'
import './ResponNav.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import {FiSearch} from 'react-icons/fi';
import { useTranslation, Trans } from 'react-i18next';
export default function ResponNav() {
    const { t, i18n } = useTranslation();
  return (<>
    <div className='ResponNav'>
        <button type="" id='Catalog-btn'><GiHamburgerMenu/></button>
        <div className='Input-search'>
            <form>
            <button type="" id='search-btn'><FiSearch/></button>
            <input type="text" placeholder='Katalog boyicha qidirish'/>
            </form>
        </div>
    </div>
    </>)
}
