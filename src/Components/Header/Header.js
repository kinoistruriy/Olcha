import React from 'react'
import './Header.css'
import ResponsiveHeader from './ResponsiveHeader'
import {Button} from 'react-bootstrap'
import { useTranslation, Trans } from 'react-i18next';
export default function Header() {
  const { t, i18n } = useTranslation();
  return (<>
  <ResponsiveHeader/>
    <div className='Header'>
      <div className='Header-left'>
        <Button className='left-header-btn'  variant=''>{t('head.part1')}</Button>
        <Button className='left-header-right-btn' variant="outline-light">{t('head.part2')}</Button>
        <span>{t('head.part3')}</span>
      </div>
      <div className='Header-right'>
        <span>+998 (97) 927 91 11</span>
        <Button variant='outline-light' size="lg"  id='right-button'>{t('head.part4')}</Button>
        <ul>
          <li onClick={()=>i18n.changeLanguage('uz')}>Uz</li>
          <li onClick={()=>i18n.changeLanguage('ru')}>Rus</li>
          <li onClick={()=>i18n.changeLanguage('уз')}>Узб</li>
        </ul> 
      </div>
    </div>
    </>)
}
