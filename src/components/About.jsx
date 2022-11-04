import React from 'react';
import '../styles/about.css';
import { useTranslation } from 'react-i18next';

const About = () => {

	const {t} = useTranslation();
	

    return (
        <div className="about" id="about">
			<div className="container">
				<div className="about__inner">
					<div className="about__text">
						<h5 className="about__spec">{t('about__spec 1')}</h5>
						<div className="about__row">
							<div className="about__item">
								<div className="item">
									- {t('about__item 1')}
								</div>
							</div>
							<div className="about__item">
								<div className="item">
									- {t('about__item 2')}
								</div>
							</div>
							<div className="about__item">
								<div className="item">
									- {t('about__item 3')}
								</div>
							</div>
							<div className="about__item">
								<div className="item">
									- {t('about__item 4')}
								</div>
							</div>
							<div className="about__item">
								<div className="item">
									- {t('about__item 5')}
								</div>
							</div>
							<div className="about__item">
								<div className="item">
									- {t('about__item 6')}
								</div>
							</div>
							<div className="about__item">
								<div className="item">
									- {t('about__item 7')}
								</div>
							</div>
						</div>
						<h5 className="about__spec">{t('about__spec 2')}</h5>
						<div className="about__row">
							<div className="about__item">
								<div className="item">
									- {t('about__item 2-1')}
								</div>
							</div>
							<div className="about__item">
								<div className="item">
									- {t('about__item 2-2')}
								</div>
							</div>
							<div className="about__item">
								<div className="item">
									- {t('about__item 2-3')}
								</div>
							</div>
							<div className="about__item">
								<div className="item">
									- {t('about__item 2-4')}
								</div>
							</div>
							<div className="about__item">
								<div className="item">
									- {t('about__item 2-5')}
								</div>
							</div>
						</div>
						<h5 className="about__spec">{t('about__spec 3')}</h5>
						<div className="about__row">
							<div className="about__item">
								<div className="item">
									- {t('about__item 3-1')}
								</div>
							</div>
							<div className="about__item">
								<div className="item">
									- {t('about__item 3-2')}
								</div>
							</div>
						</div>
					</div>
					<a className="main__btn" href="#work">{t('main__btn')}</a>
				</div>
				<hr/>
			</div>
		</div>
    );
};

export default About;