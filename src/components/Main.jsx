import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/footer.css';
import img from '../img/main/Vargos.png';
import icon1 from '../img/main/icon-1.svg';
import icon2 from '../img/main/icon-2.svg';
import icon3 from '../img/main/icon-3.svg';

const Main = () => {
    const {t} = useTranslation();
    return (
        <div className="main active" id="main">
            <div className="container">
                <div className="main__inner">
                    <div className="main__content">
                        <h2 className="main__title">{t('main__title')}</h2>
                        <h1 className="main__name">{t('main__name')}</h1>
                        <div className="main__work">
                            {t('main__work')}
                            <p>{t('main__work p')}</p>
                        </div>
                        <div className="main__contact">
                            <div className="main__contact-item">
                                <a href="https://www.instagram.com/varg07" target="_blank" rel="noopener noreferrer">
                                    <img src={icon1} alt="" />
							    </a>
                            </div>
                            <div className="main__contact-item">
                                <a href="https://github.com/vargoscreator" target="_blank" rel="noopener noreferrer">
                                    <img src={icon2} alt="" />
                                </a>
                            </div>
                            <div className="main__contact-item">
                                <a href="https://t.me/V_ASI_L" target="_blank" rel="noopener noreferrer">
                                    <img src={icon3} alt="" />
                                </a>                                
                            </div>						
                        </div>
                        <a className="main__btn" href="#about">{t('main__btn')}</a>
                    </div>
                    <div className="intro__photo">
                        <div className="intro__photo-bg"></div>
                        <img alt="img" className="intro__photo-img" src={img}/>
                        <div className="intro__photo-bg2"></div>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    );
};

export default Main;