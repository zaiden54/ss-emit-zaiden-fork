import React from 'react'
import menuBurger from '../media/icons/burger-menu-icon.png'

export const Navbar = () => {

    return(
        <div className="navbar">
            <div className="logo">
                <img src="media-contents/logo/SS_Logo.png" alt="" srcset="" />
            </div>

            <li className="menu">
                <ul className="menu__item">ГЛАВНАЯ</ul>
                <ul className="menu__item">О СС ЭМИТ</ul>
                <ul className="menu__item">КАРЬЕРА</ul>
                <ul className="menu__item">ШКОЛА ЭМИТ</ul>
                <ul className="menu__item">ПАРТНЕРЫ</ul>
                <ul className="menu__item">ЛИЧНЫЙ КАБИНЕТ</ul>
            </li>

            <div className="burger-menu">
                <div className="burger-menu__btn">
                    <img src={menuBurger} alt="" className="burger-icon" />
                </div>
            </div>
        </div>
    )
}