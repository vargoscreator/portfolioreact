import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import '../styles/reviews.css';
import slide1 from '../img/reviews/slider1.webp';
import slide2 from '../img/reviews/slider2.webp';
import slide3 from '../img/reviews/slider3.webp';
import slide4 from '../img/reviews/slider4.webp';
import slide5 from '../img/reviews/slider5.webp';

const Reviews = () => {
    const settings = {
        arrows: true,
		/* Показывать кнопки в слайдере */
		dots: true,
		/* Точки в слайдере */
        autoplay: true,
      autoplaySpeed: 3500,

		appendDots: dots => (
            <div>
              <ul style={{ display: "flex" }}> {dots} </ul>
            </div>
        )
    };

	const {t} = useTranslation();
    
    return (
        <div className="reviews">
			<div className="container">
				<div className="reviews__inner">
					<Slider className="slider" {...settings}>
						<div className="slider__item">
							<div className="reviews__item">
								<div className="reviews__descr">
									{t('reviews__descr 1')}
								</div>
								<div className="reviews__user">
									<img alt="" className="reviews__user-img" src={slide1}/>
									<div className="reviews__user-name">
										{t('reviews__user-name 1')}
									</div>
								</div>
							</div>
						</div>
						<div className="slider__item">
							<div className="reviews__item">
								<div className="reviews__descr">
									{t('reviews__descr 2')}
								</div>
								<div className="reviews__user">
									<img alt="" className="reviews__user-img" src={slide2}/>
									<div className="reviews__user-name">
										{t('reviews__user-name 2')}
									</div>
								</div>
							</div>
						</div>
						<div className="slider__item">
							<div className="reviews__item">
								<div className="reviews__descr">
									{t('reviews__descr 3')}
								</div>
								<div className="reviews__user">
									<img alt="" className="reviews__user-img" src={slide3}/>
									<div className="reviews__user-name">
										{t('reviews__user-name 3')}
									</div>
								</div>
							</div>
						</div>
						<div className="slider__item">
							<div className="reviews__item">
								<div className="reviews__descr">
									{t('reviews__descr 4')}
								</div>
								<div className="reviews__user">
									<img alt="" className="reviews__user-img" src={slide4}/>
									<div className="reviews__user-name">
										{t('reviews__user-name 4')}
									</div>
								</div>
							</div>
						</div>
						<div className="slider__item">
							<div className="reviews__item">
								<div className="reviews__descr">
									{t('reviews__descr 5')}
								</div>
								<div className="reviews__user">
									<img alt="" className="reviews__user-img" src={slide5}/>
									<div className="reviews__user-name">
										{t('reviews__user-name 5')}
									</div>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</div>
    );
};

export default Reviews;