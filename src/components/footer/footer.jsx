import { useTranslation } from 'react-i18next'
import './footer.scss'

import logo from '../../assets/logo.jpg'
import tg from '../../assets/tg.png'
import inst from '../../assets/inst.png'
import yt from '../../assets/yt.png' 

export default function Footer() {
    const {t} = useTranslation()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_container">
                 <a href="/">
                 <img src={logo} alt="" className="footer_img" />  
                 </a>

                  <div className="footer_wrap">
                    <a target='_blank' href="https://www.instagram.com/vakhabovme/" className="footer_link">{t('footer.name')}</a>

                    <h1 className="footer_head">
                    {t('footer.title')}
                    </h1>
                  </div>

                  <div className='footer_list'>
                        <p className="footer_text">
                        {t('footer.pages')}
                        </p>

                        <a target='_blank' href="https://www.instagram.com/vakhabovme/">
                            <img src={inst} alt="" className="footer_link-img" />
                        </a>

                        <a target='_blank' href="https://www.youtube.com/@vakhabovme">
                            <img src={yt} alt="" className="footer_link-img" />
                        </a>

                        <a target='_blank' href="https://t.me/vakhabovme">
                            <img src={tg} alt="" className="footer_link-img" />
                        </a>
                    </div>
                </div>
                <hr className="footer_code" />
                <div className="footer_none">
                    <a target='_blank' href="https://www.instagram.com/vakhabovme/" className="footer_link">{t('footer.name')}</a>

                    <h1 className="footer_head">
                    {t('footer.title')}
                    </h1>
                  </div>
            </div>
        </footer>
    )
}