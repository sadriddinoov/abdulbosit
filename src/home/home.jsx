import Header from '../components/header/header'
import './home.scss'
import { useTranslation } from 'react-i18next'

import mann from '../assets/mann.png'
import miniman from '../assets/miniman.png'
import twoman from '../assets/twoman.png'
import traid from '../assets/traid.png'
import laptop from '../assets/lapto.png'
import vector from '../assets/vector.png'
import img1 from '../assets/image 1.png'
import img2 from '../assets/image 2.png'
import img3 from '../assets/image 3.png'
import img4 from '../assets/image 4.png'
import img5 from '../assets/image 5.png'
import img6 from '../assets/image 6.png'
import img7 from '../assets/image 7.png'
import img8 from '../assets/image 8.png'
import img9 from '../assets/image 9.png'
import img10 from '../assets/image 10.png'
import man from '../assets/man.png'
import www from '../assets/www.png'
import consult from '../assets/consulting.png'
import kids from '../assets/kids.png'
import Tablet from '../components/tablet/tablet'
import Footer from '../components/footer/footer'

export default function Home() {
    
    const {t} = useTranslation()
    return (
        <>
        
        <Header/>
        
        <section className="main">
        <div className="container">
        <div className="main_container">
        <div>
        <h1 className="main_heading">
        {t('main.title')}
        </h1>
        
        <h2 className="main_text">
        {t('main.text')}
        </h2>
        </div>
        
        <img src={mann} alt="" className="main_img" />
        </div>
        </div>
        </section>
        
        <section className="target">
        <div className="container">
        <div className="target_container">
        <h3 className="target_heading">
        {t('target.title')}
        </h3>
        
        <ul className="target_list">
        <li className="target_item">
        <div className="target_wrap">
        <img src={miniman} alt="" className="target_img" />
        </div>
        <h3 className="target_head">
        {t('target.head1')}
        </h3>
        
        <p className="target_text">
        {t('target.text1')}
        </p>
        </li>
        
        <li className="target_item">
        <div className="target_wrap">
        <img src={miniman} alt="" className="target_img" />
        </div>
        <h3 className="target_head">
        {t('target.head2')}
        </h3>
        
        <p className="target_text">
        {t('target.text2')}
        </p>
        </li>
        
        <li className="target_item">
        <div className="target_wrap">
        <img src={twoman} alt="" className="target_img" />
        </div>
        <h3 className="target_head">
        {t('target.head3')}
        </h3>
        
        <p className="target_text">
        {t('target.text3')}
        </p>
        </li>
        
        <li className="target_item">
        <div className="target_wrap">
        <img src={traid} alt="" className="target_img" />
        </div>
        <h3 className="target_head">
        {t('target.head4')}
        </h3>
        
        <p className="target_text">
        {t('target.text4')}
        </p>
        </li>
        </ul>
        </div>
        </div>
        </section>
        
        <section className="laptop">
        <div className="container">
        <div className="laptop_container">
        <img src={laptop} alt="" className="laptop_img" />
        
        <div>
        <h3 className="laptop_heading">
        {t('laptop.title')}
        </h3>
        
        <p className="laptop_text">
        {t('laptop.text')}
        </p>
        
        <a href='#works' className='laptop_btn'>
        {t('laptop.btn')}
        
        <div className="laptop_code"></div>
        
        <img src={vector} alt="" />
        </a>
        </div>
        </div>
        </div>
        </section>
        
        <section className="sponsor">
        <div className="container">
        <div className="sponsor_container">
        <h3 className="sponsor_heading">
        {t('sponsor')}
        </h3>
        
        <ul className="sponsor_list">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
        </ul>
        </div>
        </div>
        </section>
        
        <section id='works' className="works">
        <div className="container">
        <div className="works_container">
        <h3 className="works_heading">
        {t('business.title')}
        </h3>
        
        <div className="works_wrap">
        <ul className="works_list">
        <a href='https://www.instagram.com/stories/highlights/17860091558967541/' target='_blank' className="works_item">
        <img className='works_item-imgg' src={www} alt=""/>
        <div>
        <h3 className="works_item-heading">{t('business.sub1')}</h3>
        <p className="works_text">
        {t('business.text1')}
        </p>
        </div>
        </a>
        
        <a href='https://www.instagram.com/stories/highlights/18105703528318480/' target='_blank' className="works_item">
        <img className='works_item-imgg' src={consult} alt=""/>
        
        <div>
        <h3 className="works_item-heading">{t('business.sub2')}</h3>
        <p className="works_text">
        {t('business.text2')}
        </p>
        </div>
        </a>
        
        <a href='https://www.instagram.com/stories/highlights/17934135908603888/' target='_blank' className="works_item">
        <img className='works_item-imgg' src={kids} alt=""/>
        
        <div>
        <h3 className="works_item-heading">{t('business.sub3')}</h3>
        <p className="works_text">
        {t('business.text3')}
        </p>
        </div>
        </a>
        </ul>
        
        <img src={man} alt="" className="works_img" />
        </div>
        </div>
        </div>
        </section>

        <Tablet/>
        <Footer/>
        </>
        )
    }