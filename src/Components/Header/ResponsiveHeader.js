import React from 'react'
import './ResponsiveHeader.css'
import {FiPhone} from 'react-icons/fi'
import { useTranslation, Trans } from 'react-i18next';
export default function ResponsiveHeader() {
    const { t, i18n } = useTranslation();
  return (<>
    <div className='Responsive-Head'>
        <FiPhone style={{fontSize:'22px'}}/>
        <a href="#"><img src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt=""/></a>
        <div className='Select-lan'>
            Uz
            <div className='Lan-box'>
                <a href=""><p>Uz</p></a>
                <a href=""><p>Уз</p></a>
                <a href=""><p>Рус</p></a>
            </div>
        </div>
    </div>
    </>)
}
