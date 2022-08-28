import React from 'react'
import {PartnerCard} from './PartnerCard'
import {PartnersDiscountCarousel, scrollDisc} from './ParnersDiscountCarousel'
import pekarnya from '../media/images/pekarnya.png'
import mart from '../media/images/mart.jpg'
import strel from '../media/images/4szLGMSEh-4.jpg'
import topstr from '../media/images/ts_logo 1.jpg'
import a1 from '../media/images/a1.jpg'
import a2 from '../media/images/a2.jpg'
import a3 from '../media/images/a3.jpg'
import a4 from '../media/images/a4.jpg'


export const Partners = () => {
    return(
        <div class="PartnersMainText">
            <p>Наши партнёры - наша гордость.</p>
            <span>Мы сотрудничаем с лучшими брендами различных отраслей. Наша миссия - построить взаимовыгодное сотрудничество с выдающимися компаниями. Только будучи полезными друг другу мы сможем прийти к успеху.</span>
        </div>
        
    )
}

export const PartnersDiscount = () => {

    const PartnersDiscountImage=[
        {"img":a1},
        {"img":a2},
        {"img":a3},
        {"img":a4},

    ]
    return(
        <div className='Discount'>
            <div class='Shadow-r'></div>
            <div class='Shadow-l'></div>
            <div class="PartnersDiscount">
                {PartnersDiscountImage.map(item => <PartnersDiscountCarousel key={item.img} img={item.img} />)}
            </div>
            <button class='button-slideleft'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi tenetur id deleniti consequuntur! Dicta nemo quasi aspernatur optio eum.</span></button>
            <button class='button-slideright'><span>тnnnnnnnnnnnnnnnnnnnnnnnуда</span></button>
        </div>
    )
}

export const PartnersCards = () => {
    const PartnersList=[
        {"img":topstr, "title":"додо пицца с4 вкусная"},
        {"img":"", "title":"1"},
        {"img":pekarnya, "title":" додо пицца самая  cvfz додо пицца самwqeweая  cvfz додо пицца самая  cvfz додо пицца самая  cvfz додо пицца самая  cvfz"},
        {"img":"", "title":"2"},
        {"img":strel, "title":"додо3 самая21 312 32 12 321 321 32 434wfesrwefw 23 r 3r 23re 23r 3r 23er23er 2q323423 ed23 лучшая"},
        {"img":"", "title":"3"},
        {"img":mart, "title":"додо пицца самая лучшая"},
    ]
    return(
        <div class="PartnerCard">
            <div class="PartnersText">НАШИ ПАРТНЕРЫ</div>
            {PartnersList.map(item => <PartnerCard key={item.title} img={item.img} span={item.title}/>)}
        </div>
    )
}

export const PartnersRegistration = () => {
    return(
        <div>
            <div class="PartnersLetterText">
                <span>КАК С НАМИ СВЯЗАТЬСЯ</span>
            </div>
            <div class="PartnersLetter1 PartnersLetter"></div>
            <div class="PartnersLetter2 PartnersLetter"></div>
            <div class="PartnersLetter3 PartnersLetter"></div>
            <div class="PartnersLetter4 PartnersLetter"></div>
            <div class="PartnersLetter5 PartnersLetter"></div>
            <div class="PartnersLetter6 PartnersLetter"></div>
            <div class="PartnersLetter7 PartnersLetter"></div>
            <div class="PartnersLetter">
                <form action='#' class='partners-form' method='get'>
                    <label class="form-control-placeholder" for="name">Имя</label>
                    <input type="text" name='Имя'/>
                    <label class="form-control-placeholder" for="name">e-mail</label>
                    <input type="email" name='e-mail'/>
                    <label class="form-control-placeholder" for="name">Телефон</label>
                    <input type="tel" name='Телефон'/>
                    <label class="form-control-placeholder" for="name">Компания</label>
                    <input type="text" name='Компания'/>
                </form>
            </div>
        <button class="PartnersButton">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button>
    </div>
    )
}
