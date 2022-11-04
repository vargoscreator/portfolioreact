import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/works.css';
import lrb from '../img/works/lrb/lrb-ua.webp';
import lrbRu from '../img/works/lrb/lrb-ru.webp';
import lrbEn from '../img/works/lrb/lrb-en.webp';
import notes from '../img/works/notes/notes1.webp';
import xiaomi from '../img/works/xiaomi/xiaomi-ua.webp';
import xiaomiRu from '../img/works/xiaomi/xiaomi.webp';
import xiaomiEn from '../img/works/xiaomi/xiaomi-en.webp';
import happy from '../img/works/happy/happy.webp';
import webisode from '../img/works/webisode/webisode-ua.webp';
import webisodeRu from '../img/works/webisode/webisode-ru.webp';
import webisodeEn from '../img/works/webisode/webisode.webp';

const Works = () => {
	const {t, i18n} = useTranslation();

    return (
        <div className="works" id="work">
			<div className="container">
				<div className="works__inner">
					<div className="work__title-decrt">
						<h2 className="title">{t('work title')}</h2>
						<div className="descr">
						{t('work descr')}
						</div>
					</div>
					<div className="works__content">
						<div className="work__portfolio">
							<div className="work__block active">
								<div className="work__item">
									<img alt="" className="work__img" data-photo="" src={i18n.language === "ua"? lrb : i18n.language === "ru"? lrbRu : lrbEn}/>
									<div className="work__content">
										<a className="work__btn" href={i18n.language === "ua"? "/lrb" : i18n.language === "ru"? "lrb/ru" : "/lrb/en/"} target="_blank" rel="noopener noreferrer">{t('work goto')}</a>							
									</div>
								</div>
							</div>
							<div className="work__block">
								<div className="work__item">
									<img alt="" className="work__img" data-photo="" src={notes}/>
									<div className="work__content">
										<a className="work__btn" href="https://menoteapplication.000webhostapp.com/" target="_blank" rel="noopener noreferrer">{t('work goto')}</a>
									</div>
								</div>
							</div>
							<div className="work__block">
								<div className="work__item">
									<img alt="" className="work__img" data-photo="" src={i18n.language === "ua"? xiaomi : i18n.language === "ru"? xiaomiRu : xiaomiEn}/>
									<div className="work__content">
										<a className="work__btn" href={i18n.language === "ua"? "xiaomi" : i18n.language === "ru"? "xiaomi/ru" : "xiaomi/en"} target="_blank" rel="noopener noreferrer">{t('work goto')}</a>
									</div>
								</div>
							</div>
							<div className="work__block">
								<div className="work__item">
									<img alt="" className="work__img" data-photo="" src={happy}/>
									<div className="work__content">
										<a className="work__btn" href="happy" target="_blank" rel="noopener noreferrer">{t('work goto')}</a>
									</div>
								</div>
							</div>
							<div className="work__block">
								<div className="work__item">
									<img alt="" className="work__img" data-photo="" src={i18n.language === "ua"? webisode : i18n.language === "ru"? webisodeRu : webisodeEn}/>
									<div className="work__content">
										<a className="work__btn" href={i18n.language === "ua"? "webisode" : i18n.language === "ru"? "webisode/ru" : "webisode/en"} target="_blank" rel="noopener noreferrer">{t('work goto')}</a>
									</div>
								</div>
							</div>
						</div>
						<div className="work__tabs">
							<div className="work__tab active">
								LRB service
							</div>  
							<div className="work__tab">
								Notes
							</div>
							<div className="work__tab">
								Xiaomi
							</div>
							<div className="work__tab">
								Happy
							</div>
							<div className="work__tab">
								webisode
							</div>
						</div>
					</div>

				</div>
				
			</div>
		</div>
    );
};

export default Works;