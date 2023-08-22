import './header.scss'
import logo from '../../assets/logo.jpg'
import { useTranslation } from 'react-i18next';

import menu from '../../assets/menu.png'

import { useState } from "react";
import { Link } from 'react-router-dom';
import Drawer from '../Drawer/index'

export default function Header() {
  
  const { t, i18n } = useTranslation();
  
  const handleClcikLang = (e) => {
    i18n.changeLanguage(e.target.value);
    
    localStorage.setItem("lang", JSON.stringify(e.target.value));
  };
  
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  
  return (
    <header className="header">
    <div className="container">
    <div className="header_container">
    <a href="/">
    <img src={logo} alt="" className="header_img" />
    </a>
    <div className='header_wrap'>
    <a target='_blank' href="https://t.me/vakhabovme" className="header_link">{t('header.tg')}/</a>
    <a target='_blank' href="https://www.instagram.com/vakhabovme/" className="header_link">{t('header.inst')}/</a>
    <a target='_blank' href="http://fb.com/vakhabovme" className="header_link">{t('header.facebook')}</a>
    </div>
    
    <div className="header_bottom">
    <a  href="tel:+998900000000" className="header_linkk">
    +998(90) 000 0000
    </a>
    
    <a href="tel:+998900000000" className="header_btm">
    BEPUL KONSULTATSIYA
    </a>
    </div>
    
    <select
    name="language"
    onChange={handleClcikLang}
    className="header_select"
    id=""
    >
    <option className="header_opt" value="uz">
    Uz
    </option>
    <option className="header_opt" value="ru">
    Ру
    </option>
    <option className="header_opt" value="eng">
    Eng
    </option>
    </select>
    
    <img onClick={openDrawer} src={menu} alt="" className="header_none" />
    <Drawer isOpen={isDrawerOpen} closeDrawer={closeDrawer}>
    <div className="drawer_list">
    <a target='_blank' href="https://t.me/vakhabovme" className="header_dr">{t('header.tg')}</a>
    
    <a target='_blank' href="https://www.instagram.com/vakhabovme/" className="header_dr">{t('header.inst')}</a>
    
    <a target='_blank' href="http://fb.com/vakhabovme" className="header_dr">{t('header.facebook')}</a>
    
    <a  href="tel:+998900000000" className="header_dr">
    +998(90) 000 0000
    </a>
    </div>
    </Drawer>
    </div>
    </div>
    </header>
    )
  }