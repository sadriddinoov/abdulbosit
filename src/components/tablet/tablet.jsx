import './tablet.scss'
import { useTranslation } from 'react-i18next'
import tablet from '../../assets/tablet.png'
import vector from '../../assets/vector.png'

export default function Tablet () {
    
    const {t} = useTranslation()
    
    return (
        <section className="tablet">
        <div className="container">
        <div className="tablet_container">
        
        <div>
        <h3 className="tablet_heading">
        {t('tablet.title')}
        </h3>
        
        <p className="tablet_text">
        {t('tablet.text')}
        </p>
        
        <a href='https://t.me/vakhabovme' target='_blank' className='tablet_btn'>
        {t('tablet.btn')}
        
        <div className="tablet_code"></div>
        
        <img src={vector} alt="" />
        </a>
        </div>

        <img src={tablet} alt="" className="tablet_img" />
        </div>
        </div>
        </section>
        )
    }