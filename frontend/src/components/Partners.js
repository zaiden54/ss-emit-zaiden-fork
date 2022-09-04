import React, { useEffect } from "react";
import { PartnerCard } from "./PartnerCard";
import pekarnya from "../media/images/pekarnya.png";
import mart from "../media/images/mart.jpg";
import strel from "../media/images/4szLGMSEh-4.jpg";
import topstr from "../media/images/ts_logo 1.jpg";
import a1 from "../media/images/a1.png";
import a2 from "../media/images/a1.png";
import a3 from "../media/images/a1.png";

import leftArrow from "../media/icons/leftArrow.svg"
import rightArrow from "../media/icons/rightArrow.svg"

export const Partners = () => {
  return (
    <div className="PartnersMainText">
      <p>Наши партнёры - наша гордость.</p>
      <span>
        Мы сотрудничаем с лучшими брендами различных отраслей. Наша миссия -
        построить взаимовыгодное сотрудничество с выдающимися компаниями. Только
        будучи полезными друг другу мы сможем прийти к успеху.
      </span>
    </div>
  );
};

export const PartnersDiscount = () => {
  let offset = 0;

  const PartnersDiscountImage = [
    { img: a1 },
    { img: a2 },
    { img: a3 },
  ];

  let a = document.querySelector(".DiscountImages-container");
  let pic = document.querySelector(".DicosountImage-container");
  let carouselLen


  const slideleft = () => {
    carouselLen = PartnersDiscountImage.length * (+pic.offsetWidth + +getComputedStyle(pic).marginRight.replace("px", ""))
    let offsetStep = +pic.offsetWidth + +getComputedStyle(pic).marginRight.replace("px", "") 
    offset -= offsetStep

    console.log(offset, carouselLen)

    if (offset < 0) {
      offset = carouselLen - offsetStep;
    }

    a.style.left = -offset + "px";
  };
  const slideright = () => {
    carouselLen = PartnersDiscountImage.length * (+pic.offsetWidth + +getComputedStyle(pic).marginRight.replace("px", ""))
    
    offset += +pic.offsetWidth + +getComputedStyle(pic).marginRight.replace("px", "")

    console.log(offset, carouselLen)

    if (offset >= carouselLen) {
      offset = 0;
    }

    a.style.left = -offset + "px";
  };

  return (
    <div className="Discount">
      {/* <div className='Shadow-r'></div>
            <div className='Shadow-l'></div> */}
      <div className="PartnersDiscount">
        <div className="DiscountImages-container">
          {PartnersDiscountImage.map((item) => {
            return <div className="DicosountImage-container"><img className="DiscountImage" src={item.img} alt="" /></div>;
          })}
        </div>
      </div>

      <div className="partners-control">
        <div className="partners-btn-container">
            <button className="partners-slideleft" onClick={slideleft}>
                <img src={leftArrow} alt="" />
            </button>
            <button className="partners-slideright" onClick={slideright}>
                <img src={rightArrow} alt="" />
            </button>
        </div>
      </div>
    </div>
  );
};

export const PartnersCards = () => {
  const PartnersList = [
    { img: topstr, title: "додо пицца с4 вкусная" },
    { img: "", title: "1" },
    {
      img: pekarnya,
      title:
        "",
    },
    { img: "", title: "2" },
    {
      img: strel,
      title:
        "",
    },
    { img: "", title: "3" },
    { img: mart, title: "" },
  ];
  return (
    <div className="PartnerCard">
      <div className="PartnersText">НАШИ ПАРТНЕРЫ</div>
      <div className="partners">
        {PartnersList.map((item) => {
          return (
            <PartnerCard key={item.title} img={item.img} span={item.title} />
          );
        })}
      </div>
    </div>
  );
};

export const PartnersRegistration = () => {
  return (
    <div>
      <div className="PartnersLetterText">
        <span>КАК С НАМИ СВЯЗАТЬСЯ</span>
      </div>
      <div className="PartnersLetter1 PartnersLetter"></div>
      <div className="PartnersLetter2 PartnersLetter"></div>
      <div className="PartnersLetter3 PartnersLetter"></div>
      <div className="PartnersLetter4 PartnersLetter"></div>
      <div className="PartnersLetter5 PartnersLetter"></div>
      <div className="PartnersLetter6 PartnersLetter"></div>
      <div className="PartnersLetter7 PartnersLetter"></div>
      <div className="PartnersLetter">
        <form action="#" className="partners-form" method="get">
          <label className="form-control-placeholder" for="name">
            Имя
          </label>
          <input type="text" name="Имя" />
          <label className="form-control-placeholder" for="name">
            e-mail
          </label>
          <input type="email" name="e-mail" />
          <label className="form-control-placeholder" for="name">
            Телефон
          </label>
          <input type="tel" name="Телефон" />
          <label className="form-control-placeholder" for="name">
            Компания
          </label>
          <input type="text" name="Компания" />
        </form>
      </div>
      <button className="PartnersButton">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button>
    </div>
  );
};
