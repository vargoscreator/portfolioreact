import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import '../styles/contacts.css';
import {ReactComponent as Instagram} from '../img/contacts/instagram.svg';
import {ReactComponent as Github} from '../img/contacts/github.svg';
import {ReactComponent as Telegram} from '../img/contacts/telegram.svg';
import {ReactComponent as Linkedin} from '../img/contacts/linkedin.svg';
import {ReactComponent as Upwork} from '../img/contacts/upwork.svg';
import {ReactComponent as Freelancer} from '../img/contacts/freelancer.svg';
import {ReactComponent as Fiverr} from '../img/contacts/fiverr.svg';
import {ReactComponent as Freelancehunt} from '../img/contacts/freelancehunt.svg';

const Contact = () => {
	const {t} = useTranslation();
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
	

		emailjs.sendForm('service_sxp54w9', 'template_znc0nhk', form.current, 'ajjwCFx0iXeSD5kkD')
		.then(() => {
			const contact__formapply = document.querySelector('.apply');   
        	contact__formapply.classList.toggle('show');
			document.getElementById('contact__form').reset()
			setTimeout(() => {contact__formapply.classList.toggle('show');}, 2000);
		}, () => {
			const contact__formerror = document.querySelector('.error');   
        	contact__formerror.classList.toggle('show');
			setTimeout(() => {contact__formerror.classList.toggle('show');}, 2000);
		});
	};

    return (
        <div className="contact" id="contact">
			<div className="container">
				<div className="contact__inner">
					<div className="work__title-decrt">
						<h2 className="title">{t('contact title')}</h2>
						<div className="descr">
						{t('contact descr')}
						</div>
					</div>
					<div className="contact__content">
						<div className="contact__box">
							<div className="contact__item">
								<a className="contact__instagram" href="https://www.instagram.com/varg07" target="_blank" rel="noopener noreferrer">
                                    <Instagram/>
								</a>
							</div>
							<div className="contact__item">
								<a className="contact__github" href="https://github.com/vargoscreator" target="_blank" rel="noopener noreferrer">
                                    <Github/>
								</a>
							</div>
							<div className="contact__item">
								<a className="contact__telegram" href="https://t.me/V_ASI_L" target="_blank" rel="noopener noreferrer">
                                    <Telegram/>
								</a>
							</div>
							<div className="contact__item">
								<a className="contact__linkedin" href="https://www.linkedin.com/in/vasyl-horiuk" rel="noopener noreferrer">
                                    <Linkedin/>
								</a>
							</div>
						</div>


						<form className="contact__form" id='contact__form' ref={form}  onSubmit={sendEmail}>
							<div className="contact__form-item">
								<label htmlFor="fname">{t('contact name')}</label>
								<input type="text" name="user_name" placeholder={t('contact nameplace')} required/>
							</div>
							<div className="contact__form-item">
								<label htmlFor="femail">{t('contact email')}</label>
								<input type="email" name="user_email" placeholder={t('contact emailplace')} required/>
							</div>
							<div className="contact__form-item">
								<label htmlFor="fmessage">{t('contact message')}</label>
								<textarea type="text" name="user_message" placeholder={t('contact messageplace')} cols="30" rows="10" required></textarea>
							</div>					
							<input type="submit" value={t('contact send')}/>	
							<span className='contact__form-bg apply'>✓</span>	
							<span className='contact__form-bg error'>X</span>					
						</form>
					
						
						<div className="contact__box">
							<div className="contact__item">
								<a className="contact__upwork" href="https://www.upwork.com/freelancers/~011694f897e25a7f8c" target="_blank" rel="noopener noreferrer">
                                    <Upwork/>
								</a>
							</div>
							<div className="contact__item">
								<a className="contact__freelancer" href="https://www.freelancer.com/u/Vargos" target="_blank" rel="noopener noreferrer">
                                    <Freelancer/>
								</a>
							</div>
							<div className="contact__item">
								<a className="contact__fiverr" href="https://www.fiverr.com/vargosit" target="_blank" rel="noopener noreferrer">
                                    <Fiverr/>
								</a>
							</div>
							<div className="contact__item">
								<a className="contact__freelancehunt" href="https://freelancehunt.com/freelancer/Vargos.html" target="_blank" rel="noopener noreferrer">
                                    <Freelancehunt/>
								</a>
							</div>
						</div>
					
					
					
					</div>
				</div>
			</div>
		</div>
    );
};

export default Contact;