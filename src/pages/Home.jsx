import React from 'react';
import '../styles/app.css';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Reviews from '../components/Reviews';
import Works from '../components/Works';
import $ from 'jquery'; 
import { useEffect } from 'react';
import Popup from '../components/Popup';
const Home = () => {
    useEffect(() => {

        setTimeout(() => {
          const introphoto = document.querySelector('.intro__photo-img');
          introphoto.classList.add('show');
        }, 100);
    
        setTimeout(() => {
            $(".all__content").addClass("active");
        }, 1000);
    
    
        
        if ( $(window).width() > 750){
            $(".main").addClass("active");
            // при прокрутке окна (window)
            $(window).scroll(function() {
                // если пользователь прокрутил страницу более чем на 200px
                if ($(this).scrollTop() > 700) {
                    // то сделать кнопку scrollup видимой
                    $(".header__link").removeClass("active");
                    $(".about").addClass('active');
                }
            
                // иначе скрыть кнопку scrollup
                if ($(this).scrollTop() > 1900) {
                    $(".header__link").removeClass("active");
                    $(".work").addClass("active");
                }
        
                if ($(this).scrollTop() > 2900) {
                    $(".header__link").removeClass("active");
                    $(".cont").addClass("active");
                }
        
                // иначе скрыть кнопку scrollup
                if ($(this).scrollTop() < 800) {
                    $(".header__link").removeClass("active");
                    $(".main").addClass("active");
                }
            });
        }
    
        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('show');
                }
            });
        }
    
    
        let options = {threshold: [0.2]};
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll('.about__item');
        let works = document.querySelectorAll('.works');
        for (let elm of works) {
            observer.observe(elm);
        }
        for (let elm of elements) {
            observer.observe(elm);
        }
    
        $(".works__inner").on("click", ".work__tab", function() {
          // Удаляем значения актив везде //
          $(".works__inner .work__tab").removeClass("active");
          $(".work__portfolio .work__block").removeClass("active");
          // Получаем ид выделенного елемента по счоту 0+ //
          let index = $(this).index();
          // Добавлем клас актив к нажатому блоку //
          $(this).addClass("active");
          // Добавлем клас актив к инфо блоку //
          $(".work__block").eq(index).addClass("active");
        });
      }, []);

      
    return (
        <>
            <Header/>
            <Main/>
            <section className='all__content'>
                <About/>
                <Works/>
                <Reviews/>
                <Contact/>
                <Footer/>
            </section>
            <Popup/>
        </>
    );
};

export {Home};