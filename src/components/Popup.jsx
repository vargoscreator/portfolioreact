import React from 'react'
import '../styles/popup.css';
import img from '../img/main/Vargos.png';
import maps from '../img/popup/map.png';
import github from '../img/popup/github.png';
import linked from '../img/popup/linked.png';
import mail from '../img/popup/mail.png';
import telegram from '../img/popup/telegram.png';
import icon from '../img/popup/icon.svg';
import { useTranslation } from 'react-i18next';

const Popup = () => {

	const {t} = useTranslation();
    function popupActive() {
        const hideHeader = document.getElementsByClassName('header__list')[0];
        hideHeader.classList.toggle('hiddenLink');
        const popup = document.getElementsByClassName('popup__bg')[0];
        popup.classList.toggle('active');
        const popu2p = document.getElementsByClassName('popup')[0];
        popu2p.classList.toggle('active');
        const bodyclick = document.querySelector('body');
        bodyclick.classList.toggle('hidden');
    }

    return (
        <div className='popup__bg'>
        <div className="popup">
            <div className="popup__left-content">
                <div className="popup__left-myImg">
                    <img alt="img" className="popup__left-img" src={img}/>
                    <div className="popup__left-bg"></div>
                </div>
                <div className="popup__left-item">
                    <div className="popup__contact-name">{t('popup contact')}</div>
                    <div className="popup__contact-item">
                        <div className="popup__contact-icon">
                            <img alt="img" className="popup__contact-img" src={maps}/>
                        </div>
                        <div className="popup__contact-title">{t('popup city')}</div>
                    </div>
                    <a className="popup__contact-item" href='mailto:bacahoriyk@gmail.com'>
                        <div className="popup__contact-icon">
                            <img alt="img" className="popup__contact-img" src={mail}/>
                        </div>
                        <div className="popup__contact-title">bacahoriyk@gmail.com</div>
                    </a>
                    <a className="popup__contact-item" href='https://www.linkedin.com/in/vasyl-horiuk/' target="_blank" rel="noopener noreferrer">
                        <div className="popup__contact-icon">
                            <img alt="img" className="popup__contact-img" src={linked}/>
                        </div>
                        <div className="popup__contact-title">Linkedln</div>
                    </a>
                    <a className="popup__contact-item" href='https://github.com/vargoscreator/' target="_blank" rel="noopener noreferrer">
                        <div className="popup__contact-icon">
                            <img alt="img" className="popup__contact-img" src={github}/>
                        </div>
                        <div className="popup__contact-title">GitHub</div>
                    </a>
                    <a className="popup__contact-item" href='https://t.me/V_ASI_L' target="_blank" rel="noopener noreferrer">
                        <div className="popup__contact-icon">
                            <img alt="img" className="popup__contact-img" src={telegram}/>
                        </div>
                        <div className="popup__contact-title">Telegram</div>
                    </a>
                </div>
                <div className="popup__left-item">
                    <div className="popup__contact-name">{t('popup skills')}</div>
                    <div className="popup__contact-item">
                        <div className="popup__contact-icon">
                            <img alt="img" className="popup__contact-img" src={icon}/>
                        </div>
                        <div className="popup__contact-title">Html</div>
                    </div>
                    <div className="popup__contact-item">
                        <div className="popup__contact-icon">
                            <img alt="img" className="popup__contact-img" src={icon}/>
                        </div>
                        <div className="popup__contact-title">CSS</div>
                    </div>
                    <div className="popup__contact-item">
                        <div className="popup__contact-icon">
                            <img alt="img" className="popup__contact-img" src={icon}/>
                        </div>
                        <div className="popup__contact-title">JavaScript</div>
                    </div>
                    <div className="popup__contact-item">
                        <div className="popup__contact-icon">
                            <img alt="img" className="popup__contact-img" src={icon}/>
                        </div>
                        <div className="popup__contact-title">React.js</div>
                    </div>
                    <div className="popup__contact-item">
                        <div className="popup__contact-icon">
                            <img alt="img" className="popup__contact-img" src={icon}/>
                        </div>
                        <div className="popup__contact-title">GIT</div>
                    </div>
                    <div className="popup__contact-item">
                        <div className="popup__contact-icon">
                            <img alt="img" className="popup__contact-img" src={icon}/>
                        </div>
                        <div className="popup__contact-title">PHP</div>
                    </div>
                </div>
                <div className="popup__left-item">
                    <div className="popup__contact-name">{t('popup lang')}</div>
                    <div className="popup__contact-item">
                        <div className="popup__contact-title">UA</div>
                        <div className="popup__contact-icon">
                            <ul className='popup__contact-ua'>
                                <li className='active'></li>
                                <li className='active'></li>
                                <li className='active'></li>
                                <li className='active'></li>
                                <li className='active'></li>
                                <li className='active'></li>
                            </ul>
                        </div>
                    </div>
                    <div className="popup__contact-item">
                        <div className="popup__contact-title">RU</div>
                        <div className="popup__contact-icon">
                        <ul className='popup__contact-ru'>
                                <li className='active'></li>
                                <li className='active'></li>
                                <li className='active'></li>
                                <li className='active'></li>
                                <li className='active'></li>
                                <li className='active'></li>
                            </ul>
                        </div>
                    </div>
                    <div className="popup__contact-item">
                        <div className="popup__contact-title">EN</div>
                        <div className="popup__contact-icon">
                            <ul className='popup__contact-en'>
                                <li className='active'></li>
                                <li className='active'></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="popup__right-content">
                <div className='popup__right-my--name'>{t('popup name')}</div>
                <div className='popup__right-posada'>Front-End developer</div>
                <div className="popup__right-descr">
                    <div className="popup__right-about">{t('popup descr')}</div>
                    <div className="popup__right-items">
                        <div className="popup__right-name">{t('popup education')}</div>
                        <div className="popup__right-item">
                            <div className="popup__right-title">
                                <div className="popup__right-name--1">{t('popup education-name')}</div>
                                <div className="popup__right-date">2019 - 2023</div>
                            </div>
                            <div className="popup__right-descr">
                                <div className="popup__right-name--2">{t('popup education-descr')}</div>
                            </div>                    
                        </div>                    
                    </div>

                    <div className="popup__right-items">
                        <div className="popup__right-name">{t('popup experience')}</div>
                        <div className="popup__right-item">
                            <div className="popup__right-title">
                                <div className="popup__right-name--1">{t('popup experience-name')}</div>
                                <div className="popup__right-date">{t('popup data')} 2022 - {t('popup present')}</div>
                            </div>
                            <div className="popup__right-descr">
                                <div className="popup__right-name--2">Front-end Developer</div>
                                <div className="popup__right-name--descr">{t('popup experience-descr')}</div>
                            </div>                    
                        </div>                    
                    </div>
                </div>

            </div>
            
            <div className="popup__close" onClick={popupActive}>X</div>
        </div>
        <div className="popup__close-bg" onClick={popupActive}></div>
      </div>
    );
};

export default Popup;