import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/main.css';
import icon1 from '../img/main/icon-1.svg';
import icon2 from '../img/main/icon-2.svg';
import icon3 from '../img/main/icon-3.svg';


const Footer = () => {
    const {t} = useTranslation();
    return (
        <div className="footer">
			<div className="container">
				<div className="footer__inner">
					<div className="footer__copyright">
						Copyright © Web development and site design
						<p><a href="mailto:vargoscreator@gmail.com">vargoscreator@gmail.com</a></p>
					</div>
					<div className="footer__contact">
						<div className="footer__contact-item">
							<a href="https://www.instagram.com/varg07" target="_blank" rel="noopener noreferrer">
                                <img width={40} height={40} src={icon1} alt=""/>
							</a>
						</div>
						<div className="footer__contact-item">
							<a href="https://github.com/vargoscreator" target="_blank" rel="noopener noreferrer">
                                <img width={40} height={40} src={icon2} alt=""/>
							</a>
						</div>
						<div className="footer__contact-item">
							<a href="https://t.me/V_ASI_L" target="_blank" rel="noopener noreferrer">
                                <img width={40} height={40} src={icon3} alt=""/>
							</a>
						</div>
					</div>
					<div className="footer__menu">
						<div className="footer__item">
							<a className="footer__link" href="#about">{t('footer about')}</a>
						</div>
						<div className="footer__item">
							<a className="footer__link" href="#work">{t('footer work')}</a>
						</div>	
						<div className="footer__item">
							<a className="footer__link" href="#contact">{t('footer contact')}</a>
						</div>							
					</div>
				</div>
			</div>
		</div>
    );
};

export default Footer;